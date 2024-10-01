import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByzantineEarlyComponent } from './byzantine-early.component';

describe('ByzantineEarlyComponent', () => {
  let component: ByzantineEarlyComponent;
  let fixture: ComponentFixture<ByzantineEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzantineEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ByzantineEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
