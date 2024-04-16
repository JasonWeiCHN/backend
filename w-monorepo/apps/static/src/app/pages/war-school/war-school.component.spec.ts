import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarSchoolComponent } from './war-school.component';

describe('WarSchoolComponent', () => {
  let component: WarSchoolComponent;
  let fixture: ComponentFixture<WarSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarSchoolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
