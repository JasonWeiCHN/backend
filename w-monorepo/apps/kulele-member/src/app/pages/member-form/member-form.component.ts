import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberHttpService } from '../../shared/services/member.http.service';
import { IMember } from '../../shared/interfaces/member.interface';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss',
  providers: [MemberHttpService],
})
export class MemberFormComponent implements OnInit {
  protected router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private memberService = inject(MemberHttpService);

  form!: FormGroup;
  isEditMode = false;
  memberId?: number;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      remark: [''],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.memberId = +idParam;
      this.memberService.getMemberById(this.memberId).subscribe((res) => {
        if (res) {
          this.form.patchValue(res);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('信息填写有误！');
      return;
    }

    const data: IMember = {
      id: this.memberId ?? Date.now(),
      ...this.form.value,
    };

    const save$ = this.isEditMode
      ? this.memberService.updateMember(data.id, data)
      : this.memberService.createMember(data);

    save$.subscribe(() => this.router.navigate(['/member']));
  }
}
