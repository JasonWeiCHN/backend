import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartridgeCardComponent } from './cartridge-card.component';

describe('CartridgeCardComponent', () => {
  let component: CartridgeCardComponent;
  let fixture: ComponentFixture<CartridgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartridgeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartridgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
