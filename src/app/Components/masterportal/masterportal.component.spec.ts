import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterportalComponent } from './masterportal.component';

describe('MasterportalComponent', () => {
  let component: MasterportalComponent;
  let fixture: ComponentFixture<MasterportalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterportalComponent]
    });
    fixture = TestBed.createComponent(MasterportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
