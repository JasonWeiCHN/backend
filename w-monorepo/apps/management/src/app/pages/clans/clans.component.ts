import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IImageFileUpload,
  IWarhammerClassifierBase,
  WARHAMMER_CLASSIFIERS,
  WarhammerHttpService
} from '@w-monorepo/warhammer';

@Component({
  selector: 'm-clans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
  providers: [WarhammerHttpService]
})
export class ClansComponent implements OnInit {
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

  public constructor(private warhammerHttpService: WarhammerHttpService) {
  }

  ngOnInit(): void {
    this.loadWarhammerClassifiers();
  }

  uploadAllFiles(): void {
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

  loadWarhammerClassifiers(): void {
    this.warhammerHttpService.findAllWarhammerClassifiers().subscribe(data => {
      this.warhammerClassifiers = data;
    });
  }

  onSubmit(): void {
    this.imageFileUpload.warhammerClassifierId = this.selectedClassifierId;
    this.warhammerHttpService.saveImageFile(this.imageFileUpload).subscribe(() => {
      // Handle success
      console.log('Image file saved successfully!');
    }, error => {
      // Handle error
      console.error('Failed to save image file:', error);
    });
  }
}
