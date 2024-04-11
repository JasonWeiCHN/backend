import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryOfJapanComponent } from './history-of-japan.component';

describe('HistoryOfJapanComponent', () => {
  let component: HistoryOfJapanComponent;
  let fixture: ComponentFixture<HistoryOfJapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryOfJapanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryOfJapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
