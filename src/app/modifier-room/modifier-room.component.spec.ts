import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRoomComponent } from './modifier-room.component';

describe('ModifierRoomComponent', () => {
  let component: ModifierRoomComponent;
  let fixture: ComponentFixture<ModifierRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
