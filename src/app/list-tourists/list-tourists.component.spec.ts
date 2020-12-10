import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTouristsComponent } from './list-tourists.component';

describe('ListTouristsComponent', () => {
  let component: ListTouristsComponent;
  let fixture: ComponentFixture<ListTouristsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTouristsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTouristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
