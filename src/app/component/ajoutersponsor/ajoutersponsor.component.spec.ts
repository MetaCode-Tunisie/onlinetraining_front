import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersponsorComponent } from './ajoutersponsor.component';

describe('AjoutersponsorComponent', () => {
  let component: AjoutersponsorComponent;
  let fixture: ComponentFixture<AjoutersponsorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutersponsorComponent]
    });
    fixture = TestBed.createComponent(AjoutersponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
