import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMassbyComponent } from './about-massby.component';

describe('AboutMassbyComponent', () => {
  let component: AboutMassbyComponent;
  let fixture: ComponentFixture<AboutMassbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMassbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMassbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
