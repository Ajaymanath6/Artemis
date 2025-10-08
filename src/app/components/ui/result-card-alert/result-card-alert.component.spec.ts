import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardAlertComponent } from './result-card-alert.component';

describe('ResultCardAlertComponent', () => {
  let component: ResultCardAlertComponent;
  let fixture: ComponentFixture<ResultCardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultCardAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
