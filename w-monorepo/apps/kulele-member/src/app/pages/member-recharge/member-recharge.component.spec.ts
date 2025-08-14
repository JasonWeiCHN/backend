import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberRechargeComponent } from './member-recharge.component';

describe('MemberRechargeComponent', () => {
  let component: MemberRechargeComponent;
  let fixture: ComponentFixture<MemberRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberRechargeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
