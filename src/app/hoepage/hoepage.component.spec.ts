import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoepageComponent } from './hoepage.component';

describe('HoepageComponent', () => {
  let component: HoepageComponent;
  let fixture: ComponentFixture<HoepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
