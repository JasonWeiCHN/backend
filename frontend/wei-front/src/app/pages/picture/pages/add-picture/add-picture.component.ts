import { Component, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'wei-front-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddPictureComponent {
  progress = 0;
  imageForms: FormGroup[] = [];
  @ViewChild('imageFormTemplate', { static: true }) imageFormTemplate!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private fb: FormBuilder) {}

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
        this.generateImageForm(file.name);
        // 文件加载完成后的处理逻辑
      };

      reader.readAsDataURL(file);
    });
  }

  generateImageForm(imageName: string): void {
    const imageForm = this.fb.group({
      name: [imageName],
      category: [''],
      searchKey: this.fb.array([]),
    });

    this.imageForms.push(imageForm);
    this.renderImageForm(imageForm);
  }

  renderImageForm(imageForm: FormGroup): void {
    this.container.clear();
    const viewRef = this.container.createEmbeddedView(this.imageFormTemplate, { $implicit: imageForm });
    viewRef.detectChanges();
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
    this.renderImageForm(imageForm);
  }
}
