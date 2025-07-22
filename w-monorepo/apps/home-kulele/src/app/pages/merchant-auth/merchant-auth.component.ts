import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  LoginResponse,
  MerchantHttpService,
} from '../../shared/services/merchant.http.service';

@Component({
  selector: 'app-merchant-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './merchant-auth.component.html',
  styleUrl: './merchant-auth.component.scss',
  providers: [MerchantHttpService],
})
export class MerchantAuthComponent {
  private fb = inject(FormBuilder);
  private merchantService = inject(MerchantHttpService);
  protected router = inject(Router);

  isLoginMode = true;
  showToggleButton = false; // 控制是否显示“切换到注册”

  form: FormGroup = this.fb.group({
    name: [''],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    databaseName: [''],
  });

  constructor() {
    // 初始化时从 localStorage 判断是否显示注册切换按钮
    this.showToggleButton = localStorage.getItem('isSuperAdmin') === 'true';
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.form.reset();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('表单验证失败');
      return;
    }

    const value = this.form.value;

    if (this.isLoginMode) {
      this.merchantService.login(value.username, value.password).subscribe({
        next: (res: LoginResponse) => {
          console.log('登录成功:', res);
          localStorage.setItem('token', res.token); // ✅ 保存 token
          this.router.navigate(['/dashboard']); // 跳转到门户页
        },
        error: (err) => alert('登录失败：' + err.error?.message || err.message),
      });
    } else {
      const registerDto = {
        name: value.name,
        username: value.username,
        password: value.password,
        databaseName: value.databaseName,
      };

      this.merchantService.register(registerDto).subscribe({
        next: () => {
          alert('注册成功！请登录');
          this.toggleMode();
        },
        error: (err) => alert('注册失败：' + err.error?.message || err.message),
      });
    }
  }
}
