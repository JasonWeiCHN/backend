import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';
import { IAccountingRecord } from '../../shared/interfaces/accounting-record.interface';
import { IGame } from '../../shared/interfaces/game.interface';
import { IRoom } from '../../shared/interfaces/room.interface';

@Component({
  selector: 'app-accounting-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './accounting-form.component.html',
  styleUrl: './accounting-form.component.scss',
  providers: [AccountingHttpService],
})
export class AccountingFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private accountingService = inject(AccountingHttpService);
  protected router = inject(Router);

  form!: FormGroup;
  isEditMode = false;
  recordId?: number;

  platforms = ['美团', '抖音', '门市', '小红书'];
  consoleOptions = [
    'PS5',
    'SWITCH',
    'PS4',
    'STEAM',
    '小霸王',
    '月光宝盒',
    '游戏盒子',
  ];
  contactTypes = ['电话', '微信'];
  customerTypes = ['情侣', '基友', '闺蜜', '单人', '家庭', '朋友', '其他'];

  searchControl = new FormControl('');
  searchInput = '';
  showSuggestions = false;
  allGames: IGame[] = [];
  filteredSuggestions: IGame[] = [];
  selectedGames: string[] = [];
  roomList: IRoom[] = [];

  ngOnInit(): void {
    // 初始化表单
    this.form = this.fb.group({
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      duration: [{ value: 0, disabled: true }],
      consoleType: ['', Validators.required],
      gameNames: [''],
      customerType: ['', Validators.required],
      isReturning: [false],
      actualAmount: [0, [Validators.required, Validators.min(0)]],
      platform: ['', Validators.required],
      remark: [''],
      contactType: [''],
      contactValue: [''],
      roomId: [null],
    });

    // 自动计算时长
    this.form
      .get('startDateTime')!
      .valueChanges.subscribe(() => this.updateDuration());
    this.form
      .get('endDateTime')!
      .valueChanges.subscribe(() => this.updateDuration());

    // 加载游戏列表
    this.accountingService.getGameList().subscribe((games) => {
      this.allGames = games;
    });

    this.searchControl.valueChanges.subscribe((value) => {
      this.searchInput = value || '';
      const keyword = this.searchInput.trim().toLowerCase();
      this.filteredSuggestions = this.allGames
        .filter((game) =>
          (game.name + (game.searchKeywords || ''))
            .toLowerCase()
            .includes(keyword)
        )
        .filter((g) => !this.selectedGames.includes(g.name));
    });

    // 检查是否为编辑模式
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.recordId = +idParam;

      this.accountingService
        .getRecordById(this.recordId)
        .subscribe((record) => {
          this.selectedGames = record.gameNames;
          this.form.patchValue({
            startDateTime: record.startDateTime,
            endDateTime: record.endDateTime,
            duration: record.duration,
            consoleType: record.consoleType,
            gameNames: record.gameNames.join(';'),
            customerType: record.customerType,
            isReturning: record.isReturning,
            actualAmount: record.actualAmount,
            platform: record.platform,
            remark: record.remark || '',
            contactType: record.contactType,
            contactValue: record.contactValue,
            roomId: record.roomId ?? null,
          });
        });
    }

    // 获取包房数量
    this.accountingService.getAllRooms().subscribe({
      next: (rooms) => (this.roomList = rooms),
      error: (err) => {
        console.error('获取包房列表失败', err);
        this.roomList = [];
      },
    });
  }

  updateDuration(): void {
    const start = this.form.get('startDateTime')?.value;
    const end = this.form.get('endDateTime')?.value;

    if (!start || !end) return;

    const startDt = new Date(start);
    const endDt = new Date(end);

    const diffMs = endDt.getTime() - startDt.getTime();

    if (diffMs <= 0) {
      this.form.get('duration')?.setValue(0);
      return;
    }

    const diffHours = diffMs / (1000 * 60 * 60);
    this.form.get('duration')?.setValue(+diffHours.toFixed(1)); // 转为数字类型
  }

  openDatePicker(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    if (input && 'showPicker' in input) {
      input.showPicker(); // Chrome、Edge 支持
    }
  }

  selectGame(game: IGame): void {
    if (!this.selectedGames.includes(game.name)) {
      this.selectedGames.push(game.name);
      this.updateFormGameNames();
    }
    this.searchControl.setValue('');
    this.filteredSuggestions = [];
  }

  removeGame(name: string): void {
    this.selectedGames = this.selectedGames.filter((n) => n !== name);
    this.updateFormGameNames();
  }

  updateFormGameNames(): void {
    this.form.get('gameNames')?.setValue(this.selectedGames.join(';'));
  }

  onBlur(): void {
    setTimeout(() => (this.showSuggestions = false), 200); // 延迟关闭，避免点击触发 blur 时丢失选择
  }

  onSubmit(): void {
    console.log('onSubmit！');

    if (this.form.invalid) {
      console.log('表单验证不通过！');
      return;
    }

    const raw = this.form.getRawValue();
    console.log(raw);
    const record: IAccountingRecord = {
      id: this.recordId ?? Date.now(), // 临时 ID
      startDateTime: raw.startDateTime,
      endDateTime: raw.endDateTime,
      duration: raw.duration,
      consoleType: raw.consoleType,
      gameNames: raw.gameNames.split(';').map((name: string) => name.trim()),
      customerType: raw.customerType,
      isReturning: raw.isReturning,
      actualAmount: raw.actualAmount,
      platform: raw.platform,
      remark: raw.remark || '',
      contactType: raw.contactType || null,
      contactValue: raw.contactValue || null,
      roomId: raw.roomId ?? null,
    };

    const save$ = this.isEditMode
      ? this.accountingService.updateRecord(record.id, record)
      : this.accountingService.createRecord(record);

    save$.subscribe(() => this.router.navigate(['/accounting']));
  }
}
