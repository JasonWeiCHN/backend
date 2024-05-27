import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMode } from '@w-monorepo/enums';
import { Router } from '@angular/router';

interface IVoteItem {
  id: string;
  path: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})
export class VoteComponent {
  protected readonly eMode = EMode;
  protected votes: IVoteItem[] = [
    {
      id: '',
      path: 'vote/hard-to-fight',
      title: '你认为最难打的种族？',
      description: '什么种族你打着难受还恶心？'
    },
    {
      id: '',
      path: 'vote/easy-to-fight',
      title: '你认为好打的种族？',
      description: '这个种族我随便虐，简单的要死。'
    }
  ];

  public constructor(private _router: Router) {
  }

  protected onVoteClick(item: IVoteItem): void {
    console.log('vote');
    this._router.navigate([item.path]);
  }
}
