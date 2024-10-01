import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AragonEarlyComponent } from './aragon-early.component';

describe('AragonEarlyComponent', () => {
  let component: AragonEarlyComponent;
  let fixture: ComponentFixture<AragonEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AragonEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AragonEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
