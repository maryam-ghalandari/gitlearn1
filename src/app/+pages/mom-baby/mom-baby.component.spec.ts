import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomBabyComponent } from './mom-baby.component';

describe('MomBabyComponent', () => {
  let component: MomBabyComponent;
  let fixture: ComponentFixture<MomBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomBabyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
