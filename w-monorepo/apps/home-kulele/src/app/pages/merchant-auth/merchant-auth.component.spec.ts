import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantAuthComponent } from './merchant-auth.component';

describe('MerchantAuthComponent', () => {
  let component: MerchantAuthComponent;
  let fixture: ComponentFixture<MerchantAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
