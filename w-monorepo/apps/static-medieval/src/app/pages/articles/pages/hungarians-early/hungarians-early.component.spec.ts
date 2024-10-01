import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HungariansEarlyComponent } from './hungarians-early.component';

describe('HungariansEarlyComponent', () => {
  let component: HungariansEarlyComponent;
  let fixture: ComponentFixture<HungariansEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HungariansEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HungariansEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
