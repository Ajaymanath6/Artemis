import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllisthubLayoutComponent } from './alllisthub-layout.component';

describe('AlllisthubLayoutComponent', () => {
  let component: AlllisthubLayoutComponent;
  let fixture: ComponentFixture<AlllisthubLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlllisthubLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllisthubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
