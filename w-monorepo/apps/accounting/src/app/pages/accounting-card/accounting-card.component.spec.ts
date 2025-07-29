import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountingCardComponent } from './accounting-card.component';

describe('AccountingCardComponent', () => {
  let component: AccountingCardComponent;
  let fixture: ComponentFixture<AccountingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
