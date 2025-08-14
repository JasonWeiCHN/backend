import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberConsumptionComponent } from './member-consumption.component';

describe('MemberConsumptionComponent', () => {
  let component: MemberConsumptionComponent;
  let fixture: ComponentFixture<MemberConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberConsumptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
