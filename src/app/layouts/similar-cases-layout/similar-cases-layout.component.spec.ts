import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCasesLayoutComponent } from './similar-cases-layout.component';

describe('SimilarCasesLayoutComponent', () => {
  let component: SimilarCasesLayoutComponent;
  let fixture: ComponentFixture<SimilarCasesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarCasesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarCasesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
