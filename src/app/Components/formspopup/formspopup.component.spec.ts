import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspopupComponent } from './formspopup.component';

describe('FormspopupComponent', () => {
  let component: FormspopupComponent;
  let fixture: ComponentFixture<FormspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspopupComponent]
    });
    fixture = TestBed.createComponent(FormspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
