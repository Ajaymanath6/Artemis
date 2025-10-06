import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesHubLayoutComponent } from './judges-hub-layout.component';

describe('JudgesHubLayoutComponent', () => {
  let component: JudgesHubLayoutComponent;
  let fixture: ComponentFixture<JudgesHubLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgesHubLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgesHubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
