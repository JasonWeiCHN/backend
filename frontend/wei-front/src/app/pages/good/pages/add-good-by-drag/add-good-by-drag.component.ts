import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoodHttpService } from '../../shared/services/good.http.service';

@Component({
  selector: 'wei-front-add-good-by-drag',
  templateUrl: './add-good-by-drag.component.html',
  styleUrls: ['./add-good-by-drag.component.scss'],
  providers: [GoodHttpService],
})
export class AddGoodByDragComponent {
  public goodForm!: FormGroup;
  public selectedFile!: File;

  constructor(private formBuilder: FormBuilder, private goodHttpService: GoodHttpService) {}

  public onDragOver(event: any) {
    event.preventDefault();
  }

  public onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.selectedFile = files[0];
      console.log(this.selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          this.goodForm = this.formBuilder.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required],
            keywords: ['', Validators.required],
          });
          // TODO remove?
          // const formData = new FormData();
          // formData.append('file', this.selectedFile);
          // formData.append('name', '');
          // formData.append('category', '');
          // formData.append('price', '');
          // formData.append('description', '');
          // formData.append('keywords', '');
          this.goodForm.patchValue({
            name: this.selectedFile.name,
            category: '',
            price: '',
            description: '',
            keywords: '',
          });
        };
      };
      reader.readAsDataURL(this.selectedFile);
    }
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
