import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventuserComponent } from './eventuser.component';

describe('EventuserComponent', () => {
  let component: EventuserComponent;
  let fixture: ComponentFixture<EventuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventuserComponent]
    });
    fixture = TestBed.createComponent(EventuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
