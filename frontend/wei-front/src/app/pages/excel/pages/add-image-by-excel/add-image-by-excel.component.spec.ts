import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageByExcelComponent } from './add-image-by-excel.component';

describe('AddImageByExcelComponent', () => {
  let component: AddImageByExcelComponent;
  let fixture: ComponentFixture<AddImageByExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddImageByExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddImageByExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
