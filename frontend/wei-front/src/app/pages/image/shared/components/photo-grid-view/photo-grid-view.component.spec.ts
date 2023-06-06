import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGridViewComponent } from './photo-grid-view.component';

describe('PhotoGridViewComponent', () => {
  let component: PhotoGridViewComponent;
  let fixture: ComponentFixture<PhotoGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGridViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
