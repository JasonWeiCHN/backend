import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nagash1Component } from './nagash1.component';

describe('NagashComponent', () => {
  let component: Nagash1Component;
  let fixture: ComponentFixture<Nagash1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nagash1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Nagash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
