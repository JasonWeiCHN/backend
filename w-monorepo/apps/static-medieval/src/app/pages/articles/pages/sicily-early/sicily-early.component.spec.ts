import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SicilyEarlyComponent } from './sicily-early.component';

describe('SicilyEarlyComponent', () => {
  let component: SicilyEarlyComponent;
  let fixture: ComponentFixture<SicilyEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SicilyEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SicilyEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
