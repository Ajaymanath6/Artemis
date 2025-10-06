import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeDetailComponent } from './judge-detail.component';

describe('JudgeDetailComponent', () => {
  let component: JudgeDetailComponent;
  let fixture: ComponentFixture<JudgeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
