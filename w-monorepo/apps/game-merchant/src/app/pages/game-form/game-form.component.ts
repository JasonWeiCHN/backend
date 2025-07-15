import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameRelationHttpService } from '../../shared/services/game-relation.http.service';
import { GameHttpService } from '../../shared/services/game.http.service';
import { IGame } from '../../shared/interfaces/game.interface';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss',
  providers: [GameRelationHttpService, GameHttpService],
})
export class GameFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  protected router = inject(Router);
  private route = inject(ActivatedRoute);
  private gameRelationService = inject(GameRelationHttpService);
  private gameSearchService = inject(GameHttpService);

  form!: FormGroup;
  isEdit = false;
  gameId?: number;

  gameSearchKeyword = '';
  allGames: IGame[] = [];
  filteredGames: IGame[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      gameId: [null, Validators.required],
      note: [''],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.gameId = +idParam;
      this.gameRelationService.getById(this.gameId).subscribe((data) => {
        this.form.patchValue(data);
      });
    }

    this.loadAllGames();
  }

  loadAllGames(): void {
    this.gameSearchService.getAllGames().subscribe((games) => {
      this.allGames = games;
      this.filteredGames = games;
    });
  }

  onSearchChange(): void {
    const keyword = this.gameSearchKeyword.trim().toLowerCase();
    this.filteredGames = keyword
      ? this.allGames.filter((g) =>
          (g.name + ' ' + (g.searchKeywords ?? ''))
            .toLowerCase()
            .includes(keyword)
        )
      : this.allGames;
  }

  selectGame(game: IGame): void {
    this.form.patchValue({ gameId: game.id });
    this.gameSearchKeyword = game.name;
    this.filteredGames = [];
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const save$ = this.isEdit
      ? this.gameRelationService.update(this.gameId!, this.form.value)
      : this.gameRelationService.create(this.form.value);

    save$.subscribe(() => this.router.navigate(['/game']));
  }
}
