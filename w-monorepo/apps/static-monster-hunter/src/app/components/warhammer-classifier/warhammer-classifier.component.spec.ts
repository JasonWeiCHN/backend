import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarhammerClassifierComponent } from './warhammer-classifier.component';

describe('WarhammerClassifierComponent', () => {
  let component: WarhammerClassifierComponent;
  let fixture: ComponentFixture<WarhammerClassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarhammerClassifierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarhammerClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
