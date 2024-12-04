import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybasketComponent } from './buybasket.component';

describe('BuybasketComponent', () => {
  let component: BuybasketComponent;
  let fixture: ComponentFixture<BuybasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuybasketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuybasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
