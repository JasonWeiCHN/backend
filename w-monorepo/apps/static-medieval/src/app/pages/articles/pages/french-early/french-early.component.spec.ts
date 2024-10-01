import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrenchEarlyComponent } from './french-early.component';

describe('FrenchEarlyComponent', () => {
  let component: FrenchEarlyComponent;
  let fixture: ComponentFixture<FrenchEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
