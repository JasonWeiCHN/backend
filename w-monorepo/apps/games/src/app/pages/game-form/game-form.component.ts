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
import { GameHttpService } from '../../shared/services/game.http.service';
import { IGame } from '../../shared/interfaces/game.interface';
import { ITag } from '@w-monorepo/ui';
import { IGenre } from '../../shared/interfaces/genre.interface';
import { TagHttpService } from '../../shared/services/tag.http.service';
import { GenreHttpService } from '../../shared/services/genre.http.service';
import { MultiSelectComponent } from '../../shared/components/multi-select/multi-select.component';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectComponent,
  ],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss',
  providers: [GameHttpService, GenreHttpService, TagHttpService],
})
export class GameFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  protected router = inject(Router);
  private route = inject(ActivatedRoute);
  private gameService = inject(GameHttpService);
  private genreService = inject(GenreHttpService);
  private tagService = inject(TagHttpService);

  form!: FormGroup;
  isEditMode = false;
  gameId?: number;

  allGenres: IGenre[] = [];
  allTags: ITag[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      tags: [[]], // 多选应初始化为空数组
      searchKeywords: [''],
      path: [''],
      releaseDate: [''],
      description: [''],
      videos: this.fb.array([]),
      imagesForDetail: this.fb.array([]),
      genres: [[]], // 改成 genres，和 populateForm 及模板保持一致
      guides: this.fb.array([]), // 保留空数组传给后端
    });

    this.loadGenresAndTags();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.gameId = +idParam;
      this.gameService
        .getGameById(this.gameId)
        .subscribe((game) => this.populateForm(game));
    }
  }

  get videos() {
    return this.form.get('videos') as FormArray;
  }

  get imagesForDetail() {
    return this.form.get('imagesForDetail') as FormArray;
  }

  addVideo(): void {
    this.videos.push(this.fb.control(''));
  }

  removeVideo(index: number): void {
    this.videos.removeAt(index);
  }

  addImage(): void {
    this.imagesForDetail.push(this.fb.control(''));
  }

  removeImage(index: number): void {
    this.imagesForDetail.removeAt(index);
  }

  loadGenresAndTags(): void {
    this.genreService
      .getAllGenres()
      .subscribe((genres) => (this.allGenres = genres));
    this.tagService.getAllTags().subscribe((tags) => (this.allTags = tags));
  }

  populateForm(game: IGame): void {
    this.form.patchValue({
      name: game.name,
      image: game.image,
      tags: game.tags || [],
      genres: game.genres || [],
      searchKeywords: game.searchKeywords || '',
      path: game.path || '',
      releaseDate: game.releaseDate || '',
      description: game.description || '',
    });

    this.videos.clear();
    (game.videos || []).forEach((v) => this.videos.push(this.fb.control(v)));

    this.imagesForDetail.clear();
    (game.imagesForDetail || []).forEach((img) =>
      this.imagesForDetail.push(this.fb.control(img))
    );
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const rawValue = this.form.value;

    const payload = {
      name: rawValue.name,
      image: rawValue.image,
      tags: (rawValue.tags || []).map((t: ITag) => t.id),
      searchKeywords: rawValue.searchKeywords,
      path: rawValue.path,
      releaseDate: rawValue.releaseDate,
      description: rawValue.description,
      videos: this.videos.value,
      imagesForDetail: this.imagesForDetail.value,
      genres: (rawValue.genres || []).map((g: IGenre) => g.id),
      guides: [],
    };

    const request$ = this.isEditMode
      ? this.gameService.updateGame(this.gameId!, payload)
      : this.gameService.createGame(payload);

    request$.subscribe({
      next: () => this.router.navigate(['/games']),
      error: (err) => alert('提交失败：' + (err.error || '未知错误')),
    });
  }
}
