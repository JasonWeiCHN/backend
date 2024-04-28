import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IClanUpload,
  IImageFile,
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
  public clans: IImageFile[] = [];
  public warhammerClassifiers: IWarhammerClassifierBase[] = [];
  public selectedClassifierId = '';
  public clanUpload: IClanUpload = {
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
    this.getAllClans();
  }

  public uploadAllClans(): void {
    WARHAMMER_CLASSIFIERS.forEach(classifier => {
      const warhammerClassifierId = classifier.id;
      classifier.files.forEach(file => {
        const iClanUpload: IClanUpload = {
          warhammerClassifierId,
          id: file.id,
          name: file.name,
          path: file.path,
          heroName: file.heroName,
          heroAvatarPath: file.heroAvatarPath
        };
        this.warhammerHttpService.saveClan(iClanUpload).subscribe(
          () => {
            console.log(`Clan ${file.name} uploaded successfully.`);
          },
          (error) => {
            console.error(`Error uploading clan ${file.name}:`, error);
          }
        );
      });
    });
  }

  public onSubmit(): void {
    this.clanUpload.warhammerClassifierId = this.selectedClassifierId;
    this.warhammerHttpService.saveClan(this.clanUpload).subscribe(() => {
      // Handle success
      console.log('Clan saved successfully!');
    }, error => {
      // Handle error
      console.error('Failed to save clan:', error);
    });
  }

  private getAllClans(): void {
    this.http.get<any[]>('http://localhost:8080/clan/findAll') //move to warhammerHttpService
      .subscribe(
        (clans: IImageFile[]) => {
          this.clans = clans;
        },
        error => {
          console.error('Error fetching clans:', error);
        }
      );
  }

  private loadWarhammerClassifiers(): void {
    this.warhammerHttpService.findAllWarhammerClassifiers().subscribe(data => {
      this.warhammerClassifiers = data;
    });
  }
}
