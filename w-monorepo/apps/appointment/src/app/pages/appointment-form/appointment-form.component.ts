import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentHttpService } from '../../shared/services/appointment.http.service';
import { IAppointment } from '../../shared/interfaces/appointment.interface';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss',
  providers: [AppointmentHttpService],
})
export class AppointmentFormComponent implements OnInit {
  protected router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private appointmentService = inject(AppointmentHttpService);

  form!: FormGroup;
  isEditMode = false;
  appointmentId?: number;

  ngOnInit(): void {
    this.form = this.fb.group({
      dateTime: ['', Validators.required],
      name: ['', Validators.required],
      contactType: ['微信', Validators.required],
      contactValue: ['', Validators.required],
      description: [''],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.appointmentId = +idParam;
      this.appointmentService
        .getAppointmentById(this.appointmentId)
        .subscribe((res) => {
          if (res) {
            this.form.patchValue(res);
          } else {
            console.warn('未找到该预约记录');
          }
        });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('信息填写有误！');
      return;
    }

    const data: IAppointment = {
      id: this.appointmentId ?? Date.now(),
      ...this.form.value,
    };

    const save$ = this.isEditMode
      ? this.appointmentService.updateAppointment(data.id, data)
      : this.appointmentService.createAppointment(data);

    save$.subscribe(() => this.router.navigate(['/appointment']));
  }

  openDatePicker(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    if (input && 'showPicker' in input) {
      input.showPicker(); // Chrome、Edge 支持
    }
  }
}
