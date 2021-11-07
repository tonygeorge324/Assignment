import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvailablityComponent } from './user-availablity.component';

describe('UserAvailablityComponent', () => {
  let component: UserAvailablityComponent;
  let fixture: ComponentFixture<UserAvailablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvailablityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
