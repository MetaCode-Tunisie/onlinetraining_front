import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpubliciteComponent } from './ajouterpublicite.component';

describe('AjouterpubliciteComponent', () => {
  let component: AjouterpubliciteComponent;
  let fixture: ComponentFixture<AjouterpubliciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterpubliciteComponent]
    });
    fixture = TestBed.createComponent(AjouterpubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
