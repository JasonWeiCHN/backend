import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnglishEarlyComponent } from './english-early.component';

describe('EnglishEarlyComponent', () => {
  let component: EnglishEarlyComponent;
  let fixture: ComponentFixture<EnglishEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishEarlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
