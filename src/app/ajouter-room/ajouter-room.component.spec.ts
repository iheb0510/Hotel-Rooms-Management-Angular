import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRoomComponent } from './ajouter-room.component';

describe('AjouterRoomComponent', () => {
  let component: AjouterRoomComponent;
  let fixture: ComponentFixture<AjouterRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
