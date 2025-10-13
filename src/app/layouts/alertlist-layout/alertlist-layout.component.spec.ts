import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertlistLayoutComponent } from './alertlist-layout.component';

describe('AlertlistLayoutComponent', () => {
  let component: AlertlistLayoutComponent;
  let fixture: ComponentFixture<AlertlistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertlistLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertlistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


