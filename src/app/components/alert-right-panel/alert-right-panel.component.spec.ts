import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRightPanelComponent } from './alert-right-panel.component';

describe('AlertRightPanelComponent', () => {
  let component: AlertRightPanelComponent;
  let fixture: ComponentFixture<AlertRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertRightPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
