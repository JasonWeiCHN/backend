import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundEarlyComponent } from './background-early.component';

describe('BackgroundEarlyComponent', () => {
  let component: BackgroundEarlyComponent;
  let fixture: ComponentFixture<BackgroundEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
