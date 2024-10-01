import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlmohadsEarlyComponent } from './almohads-early.component';

describe('AlmohadsEarlyComponent', () => {
  let component: AlmohadsEarlyComponent;
  let fixture: ComponentFixture<AlmohadsEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmohadsEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlmohadsEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
