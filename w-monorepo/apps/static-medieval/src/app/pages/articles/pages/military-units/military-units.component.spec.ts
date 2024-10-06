import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilitaryUnitsComponent } from './military-units.component';

describe('MilitaryUnitsComponent', () => {
  let component: MilitaryUnitsComponent;
  let fixture: ComponentFixture<MilitaryUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryUnitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MilitaryUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
