import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoodHttpService } from '../../shared/services/good.http.service';

@Component({
  selector: 'wei-front-add-good',
  templateUrl: './add-good.component.html',
  styleUrls: ['./add-good.component.scss'],
  providers: [GoodHttpService],
})
export class AddGoodComponent implements OnInit {
  public goodForm!: FormGroup;
  public selectedFile!: File;

  constructor(private formBuilder: FormBuilder, private goodHttpService: GoodHttpService) {}

  ngOnInit(): void {
    this.goodForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [''],
      description: [''],
      keywords: [''],
    });
  }

  public onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  public onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('name', this.goodForm.get('name')?.value);
    formData.append('category', this.goodForm.get('category')?.value);
    formData.append('price', this.goodForm.get('price')?.value);
    formData.append('description', this.goodForm.get('description')?.value);
    formData.append('keywords', this.goodForm.get('keywords')?.value);
    this.goodHttpService.addGood(formData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
