import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoServiceComponent } from './update-todo-service.component';

describe('UpdateTodoServiceComponent', () => {
  let component: UpdateTodoServiceComponent;
  let fixture: ComponentFixture<UpdateTodoServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTodoServiceComponent]
    });
    fixture = TestBed.createComponent(UpdateTodoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
