import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautymagazinComponent } from './beautymagazin.component';

describe('BeautymagazinComponent', () => {
  let component: BeautymagazinComponent;
  let fixture: ComponentFixture<BeautymagazinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautymagazinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautymagazinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
