import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClansNavigationComponent } from './clans-navigation.component';

describe('ClansNavigationComponent', () => {
  let component: ClansNavigationComponent;
  let fixture: ComponentFixture<ClansNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClansNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClansNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
