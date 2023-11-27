import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownstyleComponent } from './dropdownstyle.component';

describe('DropdownstyleComponent', () => {
  let component: DropdownstyleComponent;
  let fixture: ComponentFixture<DropdownstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownstyleComponent]
    });
    fixture = TestBed.createComponent(DropdownstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
