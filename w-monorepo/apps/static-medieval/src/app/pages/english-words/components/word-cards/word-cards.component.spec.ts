import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordCardsComponent } from './word-cards.component';

describe('WordCardsComponent', () => {
  let component: WordCardsComponent;
  let fixture: ComponentFixture<WordCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
