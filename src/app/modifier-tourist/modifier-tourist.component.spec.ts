import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTouristComponent } from './modifier-tourist.component';

describe('ModifierTouristComponent', () => {
  let component: ModifierTouristComponent;
  let fixture: ComponentFixture<ModifierTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTouristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
