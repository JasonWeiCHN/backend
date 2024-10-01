import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolyRomanEarlyComponent } from './holy-roman-early.component';

describe('HolyRomanEarlyComponent', () => {
  let component: HolyRomanEarlyComponent;
  let fixture: ComponentFixture<HolyRomanEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolyRomanEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HolyRomanEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
