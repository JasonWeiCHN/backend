import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoodByDragComponent } from './add-good-by-drag.component';

describe('AddGoodByDragComponent', () => {
  let component: AddGoodByDragComponent;
  let fixture: ComponentFixture<AddGoodByDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGoodByDragComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGoodByDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
