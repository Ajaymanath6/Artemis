import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyHubLayoutComponent } from './attorney-hub-layout.component';

describe('AttorneyHubLayoutComponent', () => {
  let component: AttorneyHubLayoutComponent;
  let fixture: ComponentFixture<AttorneyHubLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttorneyHubLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttorneyHubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
