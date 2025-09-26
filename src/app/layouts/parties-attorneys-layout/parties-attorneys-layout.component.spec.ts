import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesAttorneysLayoutComponent } from './parties-attorneys-layout.component';

describe('PartiesAttorneysLayoutComponent', () => {
  let component: PartiesAttorneysLayoutComponent;
  let fixture: ComponentFixture<PartiesAttorneysLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartiesAttorneysLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiesAttorneysLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
