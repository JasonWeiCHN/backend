import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wei-front-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss'],
})
export class AddImageComponent {
  // public selectedFile!: File;
  //
  // constructor(private http: HttpClient) {}
  //
  // public onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }
  //
  // public onUpload(): void {
  //   const fd = new FormData();
  //   fd.append('file', this.selectedFile, this.selectedFile.name);
  //
  //   this.http.post('http://localhost:8080/images/add', fd).subscribe(res => {
  //     console.log(res);
  //   });
  // }

  private selectedFile!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('name', 'example');
    formData.append('category', 'example');

    this.http.post('http://localhost:8080/images/add', formData).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
