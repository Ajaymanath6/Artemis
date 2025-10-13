import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderCompactComponent } from './app-header-compact.component';

describe('AppHeaderCompactComponent', () => {
  let component: AppHeaderCompactComponent;
  let fixture: ComponentFixture<AppHeaderCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderCompactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeaderCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


