import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameHttpService } from '../../shared/services/game.http.service';

@Component({
  selector: 'app-game-guides',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './game-guides.component.html',
  styleUrl: './game-guides.component.scss',
  providers: [GameHttpService],
})
export class GameGuidesComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private gameService = inject(GameHttpService);
  protected router = inject(Router);

  gameId!: number;
  form!: FormGroup;
  guides!: FormArray;
  loading = false;

  ngOnInit(): void {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      guides: this.fb.array([]),
    });
    this.guides = this.form.get('guides') as FormArray;

    this.loadGuides();
  }

  loadGuides() {
    this.loading = true;
    this.gameService.getGameById(this.gameId).subscribe({
      next: (game) => {
        this.guides.clear();
        (game.guides || []).forEach((g) => {
          this.guides.push(
            this.fb.group({
              title: [g.title, Validators.required],
              description: [g.description],
              author: [g.author],
              sourceUrl: [g.sourceUrl, Validators.required],
            })
          );
        });
        this.loading = false;
      },
      error: () => {
        alert('加载攻略失败');
        this.loading = false;
      },
    });
  }

  addGuide() {
    this.guides.push(
      this.fb.group({
        title: ['', Validators.required],
        description: [''],
        author: [''],
        sourceUrl: ['', Validators.required],
      })
    );
  }

  removeGuide(index: number) {
    this.guides.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('请完整填写所有必填项');
      return;
    }

    this.loading = true;
    const guidesData = this.guides.value;

    this.gameService
      .updateGuidesByGameId(this.gameId, { guides: guidesData })
      .subscribe({
        next: () => {
          alert('攻略更新成功');
          this.loading = false;
          this.router.navigate(['/games']);
        },
        error: (err: any) => {
          alert('更新失败：' + (err.error || '未知错误'));
          this.loading = false;
        },
      });
  }
}
