import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreeDemoComponent } from './free-demo.component';

describe('FreeDemoComponent', () => {
  let component: FreeDemoComponent;
  let fixture: ComponentFixture<FreeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
