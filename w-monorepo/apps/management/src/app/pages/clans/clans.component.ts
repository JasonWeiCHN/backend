import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IImageFile,
  IImageFileUpload,
  IWarhammerClassifierBase,
  WARHAMMER_CLASSIFIERS,
  WarhammerHttpService
} from '@w-monorepo/warhammer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'm-clans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
  providers: [WarhammerHttpService]
})
export class ClansComponent implements OnInit {
  public imageFiles: IImageFile[] = [];
  public warhammerClassifiers: IWarhammerClassifierBase[] = [];
  public selectedClassifierId = '';
  public imageFileUpload: IImageFileUpload = {
    warhammerClassifierId: '',
    id: '',
    name: '',
    path: '',
    heroName: '',
    heroAvatarPath: ''
  };

  public constructor(private http: HttpClient, private warhammerHttpService: WarhammerHttpService) {
  }

  public ngOnInit(): void {
    this.loadWarhammerClassifiers();
    this.getAllImageFiles();
  }

  public uploadAllFiles(): void {
    WARHAMMER_CLASSIFIERS.forEach(classifier => {
      const warhammerClassifierId = classifier.id;
      classifier.files.forEach(file => {
        const imageFileUpload: IImageFileUpload = {
          warhammerClassifierId,
          id: file.id,
          name: file.name,
          path: file.path,
          heroName: file.heroName,
          heroAvatarPath: file.heroAvatarPath
        };
        this.warhammerHttpService.saveImageFile(imageFileUpload).subscribe(
          () => {
            console.log(`File ${file.name} uploaded successfully.`);
          },
          (error) => {
            console.error(`Error uploading file ${file.name}:`, error);
          }
        );
      });
    });
  }

  public onSubmit(): void {
    this.imageFileUpload.warhammerClassifierId = this.selectedClassifierId;
    this.warhammerHttpService.saveImageFile(this.imageFileUpload).subscribe(() => {
      // Handle success
      console.log('Image file saved successfully!');
    }, error => {
      // Handle error
      console.error('Failed to save image file:', error);
    });
  }

  private getAllImageFiles(): void {
    this.http.get<any[]>('http://localhost:8080/imageFile/findAll') //move to warhammerHttpService
      .subscribe(
        (imageFiles: IImageFile[]) => {
          this.imageFiles = imageFiles;
        },
        error => {
          console.error('Error fetching image files:', error);
        }
      );
  }

  private loadWarhammerClassifiers(): void {
    this.warhammerHttpService.findAllWarhammerClassifiers().subscribe(data => {
      this.warhammerClassifiers = data;
    });
  }
}
