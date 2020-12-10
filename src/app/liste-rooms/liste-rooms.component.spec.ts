import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRoomsComponent } from './liste-rooms.component';

describe('ListeRoomsComponent', () => {
  let component: ListeRoomsComponent;
  let fixture: ComponentFixture<ListeRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
