import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserHttpService } from '../../shared/services/user.http.service';

@Component({
  selector: 'wei-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userHttpService: UserHttpService, private snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log('AddUserComponent ngOnInit');
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [''],
      role: [''],
      dateOfBirth: [''],
      country: [''],
      city: [''],
      streetAddress: [''],
      zipCode: [''],
      status: [''],
      avatar: [''],
      timezone: [''],
      language: [''],
      occupation: [''],
      company: [''],
      interests: [''],
      education: [''],
      biography: [''],
      authenticationToken: [''],
      socialMediaLinks: [''],
    });
  }

  onSubmit() {
    this.userHttpService.addUser(this.userForm.value).subscribe(() => {
      this.snackBar.open('User created successfully!', 'Close', {
        duration: 2000,
      });
      this.userForm.reset();
    });
  }
}
