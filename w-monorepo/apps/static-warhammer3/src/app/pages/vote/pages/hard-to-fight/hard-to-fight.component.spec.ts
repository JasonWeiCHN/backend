import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HardToFightComponent } from './hard-to-fight.component';

describe('HardToFightComponent', () => {
  let component: HardToFightComponent;
  let fixture: ComponentFixture<HardToFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardToFightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HardToFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
