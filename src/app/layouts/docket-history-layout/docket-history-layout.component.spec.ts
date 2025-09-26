import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketHistoryLayoutComponent } from './docket-history-layout.component';

describe('DocketHistoryLayoutComponent', () => {
  let component: DocketHistoryLayoutComponent;
  let fixture: ComponentFixture<DocketHistoryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketHistoryLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketHistoryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
