import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMenuBarComponent } from './board-menu-bar.component';

describe('BoardMenuBarComponent', () => {
  let component: BoardMenuBarComponent;
  let fixture: ComponentFixture<BoardMenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMenuBarComponent]
    });
    fixture = TestBed.createComponent(BoardMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
