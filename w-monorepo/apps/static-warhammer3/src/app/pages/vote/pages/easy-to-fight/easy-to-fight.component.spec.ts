import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasyToFightComponent } from './easy-to-fight.component';

describe('EasyToFightComponent', () => {
  let component: EasyToFightComponent;
  let fixture: ComponentFixture<EasyToFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyToFightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EasyToFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
