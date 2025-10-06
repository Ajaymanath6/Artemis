import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHubComponent } from './case-hub.component';

describe('CaseHubComponent', () => {
  let component: CaseHubComponent;
  let fixture: ComponentFixture<CaseHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
