import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameHttpService } from '../../shared/services/game.http.service';
import { IGame } from '../../shared/interfaces/game.interface';

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
      tags: [''],
      searchKeywords: [''],
      path: [''],
      releaseDate: [''],
      description: [''],
      video: [''],
      genreIds: [''],
      guides: this.fb.array([]), // ⚠️ 仍然需要留空数组以传空值给后端
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

  populateForm(game: IGame): void {
    this.form.patchValue({
      name: game.name,
      image: game.image,
      tags: (game.tags || []).join(','),
      searchKeywords: game.searchKeywords || '',
      path: game.path || '',
      releaseDate: game.releaseDate || '',
      description: game.description || '',
      video: game.video || '',
      genreIds: (game.genres || []).join(','),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const rawValue = this.form.value;

    const payload = {
      name: rawValue.name,
      image: rawValue.image,
      tags: rawValue.tags
        ? rawValue.tags.split(',').map((t: string) => t.trim())
        : [],
      searchKeywords: rawValue.searchKeywords,
      path: rawValue.path,
      releaseDate: rawValue.releaseDate,
      description: rawValue.description,
      video: rawValue.video,
      genres: rawValue.genreIds
        ? rawValue.genreIds.split(',').map((g: string) => g.trim())
        : [],
      guides: [], // ✅ 始终传空数组
    };

    const request$ = this.isEditMode
      ? this.gameService.updateGame(this.gameId!, payload)
      : this.gameService.createGame(payload);

    request$.subscribe({
      next: () => this.router.navigate(['/games']),
      error: (err) => {
        alert('提交失败：' + (err.error || '未知错误'));
      },
    });
  }
}
