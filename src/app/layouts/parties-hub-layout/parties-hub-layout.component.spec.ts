import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesHubLayoutComponent } from './parties-hub-layout.component';

describe('PartiesHubLayoutComponent', () => {
  let component: PartiesHubLayoutComponent;
  let fixture: ComponentFixture<PartiesHubLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartiesHubLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiesHubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
