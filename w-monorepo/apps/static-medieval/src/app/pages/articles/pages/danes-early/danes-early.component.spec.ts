import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DanesEarlyComponent } from './danes-early.component';

describe('DanesEarlyComponent', () => {
  let component: DanesEarlyComponent;
  let fixture: ComponentFixture<DanesEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanesEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DanesEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
