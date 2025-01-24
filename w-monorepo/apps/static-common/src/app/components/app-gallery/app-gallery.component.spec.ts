import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppGalleryComponent } from './app-gallery.component';

describe('PetGalleryComponent', () => {
  let component: AppGalleryComponent;
  let fixture: ComponentFixture<AppGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
