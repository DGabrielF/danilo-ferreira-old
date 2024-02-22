import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrisWheelComponent } from './ferris-wheel.component';

describe('FerrisWheelComponent', () => {
  let component: FerrisWheelComponent;
  let fixture: ComponentFixture<FerrisWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrisWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerrisWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
