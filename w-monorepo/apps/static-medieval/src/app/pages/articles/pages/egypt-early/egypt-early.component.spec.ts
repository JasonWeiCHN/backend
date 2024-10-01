import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EgyptEarlyComponent } from './egypt-early.component';

describe('EgyptEarlyComponent', () => {
  let component: EgyptEarlyComponent;
  let fixture: ComponentFixture<EgyptEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgyptEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EgyptEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
