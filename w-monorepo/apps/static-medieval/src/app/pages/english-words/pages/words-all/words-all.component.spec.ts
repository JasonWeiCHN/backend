import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsAllComponent } from './words-all.component';

describe('WordsAllComponent', () => {
  let component: WordsAllComponent;
  let fixture: ComponentFixture<WordsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
