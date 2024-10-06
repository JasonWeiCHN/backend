import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsCityManagementComponent } from './words-city-management.component';

describe('WordsCityManagementComponent', () => {
  let component: WordsCityManagementComponent;
  let fixture: ComponentFixture<WordsCityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsCityManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsCityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
