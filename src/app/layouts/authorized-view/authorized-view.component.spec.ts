import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedViewComponent } from './authorized-view.component';

describe('AuthorizedViewComponent', () => {
  let component: AuthorizedViewComponent;
  let fixture: ComponentFixture<AuthorizedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizedViewComponent]
    });
    fixture = TestBed.createComponent(AuthorizedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
