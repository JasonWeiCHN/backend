import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolishEarlyComponent } from './polish-early.component';

describe('PolishEarlyComponent', () => {
  let component: PolishEarlyComponent;
  let fixture: ComponentFixture<PolishEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PolishEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
