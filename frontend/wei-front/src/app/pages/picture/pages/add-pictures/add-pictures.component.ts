import { Component, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
        const imagePreview = reader.result as string;
        this.generateImageForm(file.name, imagePreview);
      };

      reader.readAsDataURL(file);
    });
  }

  generateImageForm(imageName: string, imagePreview: string): void {
    const imageForm = this.fb.group({
      name: [imageName],
      category: [''],
      searchKeys: this.fb.array([]),
      preview: [imagePreview],
    });

    this.imageForms.push(imageForm);
    this.renderAllImageForms();
  }

  renderAllImageForms(): void {
    this.container.clear();
    this.imageForms.forEach(imageForm => {
      const viewRef = this.container.createEmbeddedView(this.imageFormTemplate, { $implicit: imageForm });
      viewRef.detectChanges();
    });
  }

  addSearchKey(imageForm: FormGroup): void {
    const searchKeys = imageForm.get('searchKeys') as FormArray;
    searchKeys.push(new FormControl(''));
  }

  removeSearchKey(imageForm: FormGroup, index: number): void {
    const searchKeys = imageForm.get('searchKeys') as FormArray;
    searchKeys.removeAt(index);
  }

  addImageForm(): void {
    const imageForm = this.fb.group({
      name: [''],
      category: [''],
      searchKeys: this.fb.array([]),
    });

    this.imageForms.push(imageForm);
    this.renderAllImageForms();
  }
}
