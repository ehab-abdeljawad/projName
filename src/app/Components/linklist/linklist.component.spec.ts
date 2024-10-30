import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinklistComponent } from './linklist.component';

describe('LinklistComponent', () => {
  let component: LinklistComponent;
  let fixture: ComponentFixture<LinklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinklistComponent]
    });
    fixture = TestBed.createComponent(LinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
