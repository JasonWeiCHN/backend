import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContributorHttpService } from './shared/services/contributor.http.service';
import { IAddContributor, IContributor } from '@w-monorepo/interfaces';

@Component({
  selector: 'm-contributor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contributor.component.html',
  styleUrl: './contributor.component.scss',
  providers: [ContributorHttpService]
})
export class ContributorComponent implements OnInit {
  contributors: IContributor[] = [];
  selectedColumn = 'name'; // 默认选择 name 字段
  searchKeyword = '';
  columns: string[] = ['name', 'url'];

  addContributor: IAddContributor = {
    name: '',
    url: ''
  };

  constructor(private contributorHttpService: ContributorHttpService) {
  }

  ngOnInit(): void {
    this.loadContributors();
  }

  search(): void {
    this.contributorHttpService.searchContributors(this.selectedColumn, this.searchKeyword)
      .subscribe((contributors: IContributor[]) => {
        this.contributors = contributors;
      });
  }

  onContributorClick(contributor: IContributor): void {
    // 处理点击事件
  }

  downloadContributorsAsJson(): void {
    this.contributorHttpService.downloadContributorsAsJson().subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contributors.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error: any) => {
        console.error('Failed to download contributors:', error);
      }
    );
  }

  private loadContributors(): void {
    this.contributorHttpService.getAllContributors()
      .subscribe((contributors: IContributor[]) => {
        this.contributors = contributors;
      });
  }

  onSubmit(): void {
    this.contributorHttpService.saveContributor(this.addContributor)
      .subscribe((newContributor: IAddContributor) => {
        console.log('Contributor added successfully:', newContributor);
        this.loadContributors(); // 重新加载贡献者列表
        this.clearForm(); // 清空表单
      }, (error: any) => {
        console.error('Failed to add contributor:', error);
      });
  }

  private clearForm(): void {
    this.addContributor = {
      name: '',
      url: ''
    };
  }
}
