import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodCardComponent } from './good-card.component';

describe('GoodCardComponent', () => {
  let component: GoodCardComponent;
  let fixture: ComponentFixture<GoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
