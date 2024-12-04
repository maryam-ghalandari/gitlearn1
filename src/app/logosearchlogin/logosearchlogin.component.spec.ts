import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosearchloginComponent } from './logosearchlogin.component';

describe('LogosearchloginComponent', () => {
  let component: LogosearchloginComponent;
  let fixture: ComponentFixture<LogosearchloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosearchloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosearchloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
