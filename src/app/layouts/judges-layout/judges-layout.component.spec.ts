import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesLayoutComponent } from './judges-layout.component';

describe('JudgesLayoutComponent', () => {
  let component: JudgesLayoutComponent;
  let fixture: ComponentFixture<JudgesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
