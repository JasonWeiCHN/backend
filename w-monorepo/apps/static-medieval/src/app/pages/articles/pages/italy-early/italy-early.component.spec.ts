import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItalyEarlyComponent } from './italy-early.component';

describe('ItalyEarlyComponent', () => {
  let component: ItalyEarlyComponent;
  let fixture: ComponentFixture<ItalyEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalyEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItalyEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
