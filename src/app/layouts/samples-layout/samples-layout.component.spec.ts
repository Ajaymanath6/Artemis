import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesLayoutComponent } from './samples-layout.component';

describe('SamplesLayoutComponent', () => {
  let component: SamplesLayoutComponent;
  let fixture: ComponentFixture<SamplesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
