import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChinaCitySelectorComponent } from './china-city-selector.component';

describe('ChinaCitySelectorComponent', () => {
  let component: ChinaCitySelectorComponent;
  let fixture: ComponentFixture<ChinaCitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinaCitySelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
