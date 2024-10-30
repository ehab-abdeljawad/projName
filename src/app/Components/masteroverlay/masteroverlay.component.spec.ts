import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteroverlayComponent } from './masteroverlay.component';

describe('MasteroverlayComponent', () => {
  let component: MasteroverlayComponent;
  let fixture: ComponentFixture<MasteroverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasteroverlayComponent]
    });
    fixture = TestBed.createComponent(MasteroverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
