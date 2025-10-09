import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesHubLayoutComponent } from './cases-hub-layout.component';

describe('CasesHubLayoutComponent', () => {
  let component: CasesHubLayoutComponent;
  let fixture: ComponentFixture<CasesHubLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesHubLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesHubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
