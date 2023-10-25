import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateimageComponent } from './updateimage.component';

describe('UpdateimageComponent', () => {
  let component: UpdateimageComponent;
  let fixture: ComponentFixture<UpdateimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateimageComponent]
    });
    fixture = TestBed.createComponent(UpdateimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
