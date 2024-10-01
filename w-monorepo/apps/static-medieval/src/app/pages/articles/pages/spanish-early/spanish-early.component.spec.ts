import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpanishEarlyComponent } from './spanish-early.component';

describe('SpanishEarlyComponent', () => {
  let component: SpanishEarlyComponent;
  let fixture: ComponentFixture<SpanishEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpanishEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpanishEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
