import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAvailComponent } from './task-avail.component';

describe('TaskAvailComponent', () => {
  let component: TaskAvailComponent;
  let fixture: ComponentFixture<TaskAvailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAvailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
