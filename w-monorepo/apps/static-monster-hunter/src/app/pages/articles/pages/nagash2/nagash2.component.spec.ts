import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nagash2Component } from './nagash2.component';

describe('Nagash2Component', () => {
  let component: Nagash2Component;
  let fixture: ComponentFixture<Nagash2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nagash2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Nagash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
