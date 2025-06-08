import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from '../../shared/interfaces/game.interface';
import { GameHttpService } from '../../shared/services/game.http.service';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss',
  providers: [GameHttpService],
})
export class GameFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  protected router = inject(Router);
  private route = inject(ActivatedRoute);
  private gameService = inject(GameHttpService);

  form!: FormGroup;
  isEditMode = false;
  gameId?: number;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      tags: ['', Validators.required],
      searchKeywords: [''],
      path: [''],
      releaseDate: [''],
      description: [''],
      video: [''],
      genres: this.fb.array([]),
      guides: this.fb.array([]),
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.gameId = +idParam;
      this.gameService
        .getGameById(this.gameId)
        .subscribe((game) => this.populateForm(game));
    }
  }

  get genres(): FormArray {
    return this.form.get('genres') as FormArray;
  }

  get guides(): FormArray {
    return this.form.get('guides') as FormArray;
  }

  addGenre(): void {
    this.genres.push(
      this.fb.group({
        id: [''],
        name: [''],
        description: [''],
      })
    );
  }

  removeGenre(index: number): void {
    this.genres.removeAt(index);
  }

  addGuide(): void {
    this.guides.push(
      this.fb.group({
        title: ['', Validators.required],
        description: [''],
        author: [''],
        sourceUrl: ['', Validators.required],
      })
    );
  }

  removeGuide(index: number): void {
    this.guides.removeAt(index);
  }

  populateForm(game: IGame): void {
    this.form.patchValue({
      name: game.name,
      image: game.image,
      tags: game.tags || [],
      searchKeywords: game.searchKeywords || '',
      path: game.path || '',
      releaseDate: game.releaseDate || '',
      description: game.description || '',
      video: game.video || '',
    });

    (game.genres || []).forEach((g) => this.genres.push(this.fb.group(g)));
    (game.guides || []).forEach((gd) => this.guides.push(this.fb.group(gd)));
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const game: IGame = this.form.value;

    const request$ = this.isEditMode
      ? this.gameService.updateGame(this.gameId!, game)
      : this.gameService.createGame(game);

    request$.subscribe(() => this.router.navigate(['/games']));
  }
}
