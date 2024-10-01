import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurkishEarlyComponent } from './turkish-early.component';

describe('TurkishEarlyComponent', () => {
  let component: TurkishEarlyComponent;
  let fixture: ComponentFixture<TurkishEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurkishEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TurkishEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
