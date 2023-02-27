import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wei-front-add-image-by-excel',
  templateUrl: './add-image-by-excel.component.html',
  styleUrls: ['./add-image-by-excel.component.scss'],
})
export class AddImageByExcelComponent {
  private selectedFile!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/images/add-by-excel', formData).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
