import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IClanUpload,
  IWarhammerClassifierBase,
  IWarhammerImageFile,
  WARHAMMER_CLASSIFIERS,
  WarhammerHttpService,
} from '@w-monorepo/warhammer';
import { HttpClient } from '@angular/common/http';
import { ClansHttpService } from './shared/services/clans.http.service';

@Component({
  selector: 'm-clans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
  providers: [WarhammerHttpService, ClansHttpService],
})
export class ClansComponent implements OnInit {
  public clans: IWarhammerImageFile[] = [];
  public warhammerClassifiers: IWarhammerClassifierBase[] = [];
  public selectedClassifierId = '';
  public clanUpload: IClanUpload = {
    warhammerClassifierId: '',
    id: '',
    name: '',
    path: '',
    heroName: '',
    heroAvatarPath: '',
  };

  public constructor(
    private http: HttpClient,
    private warhammerHttpService: WarhammerHttpService,
    private clansHttpService: ClansHttpService
  ) {}

  public ngOnInit(): void {
    this.loadWarhammerClassifiers();
    this.getAllClans();
  }

  public uploadAllClans(): void {
    WARHAMMER_CLASSIFIERS.forEach((classifier) => {
      const warhammerClassifierId = classifier.id;
      classifier.files.forEach((file) => {
        const iClanUpload: IClanUpload = {
          warhammerClassifierId,
          ...file,
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

  protected downloadItemCardsAsJson(): void {
    this.clansHttpService.downloadClansAsJson().subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'clans.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error: any) => {
        console.error('Failed to download item cards:', error);
      }
    );
  }

  public onSubmit(): void {
    this.clanUpload.warhammerClassifierId = this.selectedClassifierId;
    this.warhammerHttpService.saveClan(this.clanUpload).subscribe(
      () => {
        // Handle success
        console.log('Clan saved successfully!');
      },
      (error) => {
        // Handle error
        console.error('Failed to save clan:', error);
      }
    );
  }

  private getAllClans(): void {
    this.http
      .get<any[]>('http://localhost:8080/clan/findAll') //move to warhammerHttpService
      .subscribe(
        (clans: IWarhammerImageFile[]) => {
          this.clans = clans;
        },
        (error) => {
          console.error('Error fetching clans:', error);
        }
      );
  }

  private loadWarhammerClassifiers(): void {
    this.warhammerHttpService
      .findAllWarhammerClassifiers()
      .subscribe((data) => {
        this.warhammerClassifiers = data;
      });
  }
}
