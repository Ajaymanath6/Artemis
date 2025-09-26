import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketEntriesLayoutComponent } from './docket-entries-layout.component';

describe('DocketEntriesLayoutComponent', () => {
  let component: DocketEntriesLayoutComponent;
  let fixture: ComponentFixture<DocketEntriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketEntriesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketEntriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
