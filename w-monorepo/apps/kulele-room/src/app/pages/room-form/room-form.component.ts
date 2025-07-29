import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomHttpService } from '../../shared/services/room.http.service';
import { IRoom } from '../../shared/interfaces/room.interface';
import { ERoomStatus } from '../../shared/enums/room-status.enum';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss',
})
export class RoomFormComponent implements OnInit {
  protected router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private roomService = inject(RoomHttpService);

  form!: FormGroup;
  isEditMode = false;
  roomId?: number;
  statusOptions = [
    { value: ERoomStatus.AVAILABLE, label: '空闲' },
    { value: ERoomStatus.OCCUPIED, label: '使用中' },
    { value: ERoomStatus.DISABLED, label: '停用' },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      roomNumber: ['', Validators.required],
      roomType: [''],
      capacity: [1, [Validators.required, Validators.min(1)]],
      pricePerHour: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      status: [ERoomStatus.AVAILABLE, Validators.required],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.roomId = +idParam;
      this.roomService.getRoomById(this.roomId).subscribe((room) => {
        this.form.patchValue(room);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const data: IRoom = {
      id: this.roomId ?? Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...this.form.value,
    };

    const save$ = this.isEditMode
      ? this.roomService.updateRoom(data.id, data)
      : this.roomService.createRoom(data);

    save$.subscribe(() => this.router.navigate(['/room']));
  }
}
