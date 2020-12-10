import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTouristComponent } from './ajouter-tourist.component';

describe('AjouterTouristComponent', () => {
  let component: AjouterTouristComponent;
  let fixture: ComponentFixture<AjouterTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTouristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
