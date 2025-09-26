import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCasesLayoutComponent } from './related-cases-layout.component';

describe('RelatedCasesLayoutComponent', () => {
  let component: RelatedCasesLayoutComponent;
  let fixture: ComponentFixture<RelatedCasesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedCasesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedCasesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
