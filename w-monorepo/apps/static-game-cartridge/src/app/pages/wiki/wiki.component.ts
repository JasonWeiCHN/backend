import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IWikiConfig, IWikiData } from '../../shared/interfaces/wiki.interface';
import { WIKI_CONFIG } from '../../shared/constants/app.config.constants';
import { WIKI_DATA_MAP } from '../../shared/constants/data.constants';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.scss',
})
export class WikiComponent implements OnInit {
  protected readonly wikiConfig: IWikiConfig = WIKI_CONFIG;
  protected data: IWikiData | undefined = undefined;

  public constructor(private readonly _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    
    this.data = WIKI_DATA_MAP[id];
  }
}
