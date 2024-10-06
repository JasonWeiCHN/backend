import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsBattleObjectivesComponent } from './words-battle-objectives.component';

describe('WordsBattleObjectivesComponent', () => {
  let component: WordsBattleObjectivesComponent;
  let fixture: ComponentFixture<WordsBattleObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsBattleObjectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsBattleObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
