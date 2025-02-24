import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaceMultipleSelectorComponent } from './race-multiple-selector.component';

describe('RaceMultipleSelectorComponent', () => {
  let component: RaceMultipleSelectorComponent;
  let fixture: ComponentFixture<RaceMultipleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceMultipleSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RaceMultipleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
