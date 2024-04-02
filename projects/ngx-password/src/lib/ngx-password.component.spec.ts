import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPasswordComponent } from './ngx-password.component';

describe('NgxPasswordComponent', () => {
  let component: NgxPasswordComponent;
  let fixture: ComponentFixture<NgxPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPasswordComponent]
    });
    fixture = TestBed.createComponent(NgxPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
