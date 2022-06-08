import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCandlesComponent } from './about-candles.component';

describe('AboutCandlesComponent', () => {
  let component: AboutCandlesComponent;
  let fixture: ComponentFixture<AboutCandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCandlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
