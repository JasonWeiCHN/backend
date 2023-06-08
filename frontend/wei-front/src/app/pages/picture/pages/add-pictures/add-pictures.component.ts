import { Component, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'wei-front-add-pictures',
  templateUrl: './add-pictures.component.html',
  styleUrls: ['./add-pictures.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddPicturesComponent {
  progress = 0;
  imageForms: FormGroup[] = [];
  imagePreviews: string[] = [];

  @ViewChild('imageFormTemplate', { static: true }) imageFormTemplate!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  handleFileSelect(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files) {
      this.uploadFiles(files);
    }
  }

  uploadFiles(files: FileList): void {
    const totalSize = Array.from(files).reduce((size, file) => size + file.size, 0);
    let loadedSize = 0;

    Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.onloadstart = () => {
        this.progress = 0;
      };

      reader.onprogress = (e: ProgressEvent<FileReader>) => {
        if (e.lengthComputable) {
          loadedSize += e.loaded;
          this.progress = (loadedSize / totalSize) * 100;
        }
      };

      reader.onload = () => {
        const imagePreview = reader.result as string;
        this.generateImageForm(file.name, imagePreview, file);
      };

      reader.readAsDataURL(file);
    });
  }

  generateImageForm(imageName: string, imagePreview: string, file: File): void {
    const imageForm = this.fb.group({
      name: [imageName],
      category: [''],
      searchKey: this.fb.array([]),
      preview: [imagePreview],
      file: [file],
    });

    this.imageForms.push(imageForm);
    // this.createPicture(imageForm); // 直接调用上传方法
    this.renderAllImageForms();
  }

  createPicture(imageForm: FormGroup): void {
    // 获取表单数据
    const formData = new FormData();
    formData.append('name', imageForm.get('name')?.value);
    formData.append('category', imageForm.get('category')?.value);

    const searchKey = imageForm.get('searchKey') as FormArray;
    formData.append('searchKey', searchKey.value.join(','));

    // 获取图像文件
    const file = imageForm.get('file')?.value;

    // 添加拖拽的文件
    formData.append('file', file);


    // 构建HTTP请求头
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    // 发送HTTP POST请求
    this.http.post('http://localhost:8080/pictures/add', formData, { headers }).subscribe(
        (response) => {
          // 处理成功响应
          console.log('图片上传成功', response);
        },
        (error) => {
          // 处理错误响应
          console.error('图片上传失败', error);
        }
    );
  }


  renderAllImageForms(): void {
    this.container.clear();
    this.imageForms.forEach(imageForm => {
      const viewRef = this.container.createEmbeddedView(this.imageFormTemplate, { $implicit: imageForm });
      viewRef.detectChanges();
    });
  }

  addSearchKey(imageForm: FormGroup): void {
    const searchKey = imageForm.get('searchKey') as FormArray;
    searchKey.push(new FormControl(''));
  }

  removeSearchKey(imageForm: FormGroup, index: number): void {
    const searchKey = imageForm.get('searchKey') as FormArray;
    searchKey.removeAt(index);
  }

  addImageForm(): void {
    const imageForm = this.fb.group({
      name: [''],
      category: [''],
      searchKey: this.fb.array([]),
    });

    this.imageForms.push(imageForm);
    this.renderAllImageForms();
  }
}
