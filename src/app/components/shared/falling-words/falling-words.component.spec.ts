import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingWordsComponent } from './falling-words.component';

describe('FallingWordsComponent', () => {
  let component: FallingWordsComponent;
  let fixture: ComponentFixture<FallingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallingWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
