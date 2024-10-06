import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsMilitaryUnitsComponent } from './words-military-units.component';

describe('WordsMilitaryUnitsComponent', () => {
  let component: WordsMilitaryUnitsComponent;
  let fixture: ComponentFixture<WordsMilitaryUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsMilitaryUnitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsMilitaryUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
