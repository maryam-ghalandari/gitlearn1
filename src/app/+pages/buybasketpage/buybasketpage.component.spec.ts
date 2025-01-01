import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybasketpageComponent } from './buybasketpage.component';

describe('BuybasketpageComponent', () => {
  let component: BuybasketpageComponent;
  let fixture: ComponentFixture<BuybasketpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuybasketpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuybasketpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
