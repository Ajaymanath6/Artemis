import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [AlertsComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isSidebarCollapsed).toBeFalsy();
    expect(component.searchQuery).toBe('');
    expect(component.isSearching).toBeFalsy();
    expect(component.showResults).toBeFalsy();
    expect(component.isAlertPanelOpen).toBeTruthy();
  });

  it('should toggle sidebar', () => {
    component.onSidebarToggle();
    expect(component.isSidebarCollapsed).toBeTruthy();
    
    component.onSidebarToggle();
    expect(component.isSidebarCollapsed).toBeFalsy();
  });

  it('should handle search', () => {
    const query = 'test search';
    component.onSearch(query);
    
    expect(component.searchQuery).toBe(query);
    expect(component.isSearching).toBeTruthy();
    
    // Simulate search completion
    setTimeout(() => {
      expect(component.isSearching).toBeFalsy();
      expect(component.showResults).toBeTruthy();
    }, 1100);
  });

  it('should collapse search', () => {
    component.searchQuery = 'test';
    component.showResults = true;
    
    component.onCollapseSearch();
    
    expect(component.searchQuery).toBe('');
    expect(component.showResults).toBeFalsy();
  });

  it('should toggle alert panel', () => {
    component.isAlertPanelOpen = true;
    component.onToggleAlertPanel();
    expect(component.isAlertPanelOpen).toBeFalsy();
    
    component.onToggleAlertPanel();
    expect(component.isAlertPanelOpen).toBeTruthy();
  });

  it('should close alert panel', () => {
    component.isAlertPanelOpen = true;
    component.onCloseAlertPanel();
    expect(component.isAlertPanelOpen).toBeFalsy();
  });

  it('should save alert and close panel', () => {
    const alertData = { name: 'Test Alert', frequency: 'daily', recipients: 'everyone' };
    component.isAlertPanelOpen = true;
    
    component.onSaveAlert(alertData);
    
    expect(component.isAlertPanelOpen).toBeFalsy();
  });
});
