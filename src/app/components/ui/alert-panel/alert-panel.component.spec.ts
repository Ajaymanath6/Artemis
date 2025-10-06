import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AlertPanelComponent } from './alert-panel.component';

describe('AlertPanelComponent', () => {
  let component: AlertPanelComponent;
  let fixture: ComponentFixture<AlertPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertPanelComponent, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default alert data', () => {
    expect(component.alertData.name).toBe('');
    expect(component.alertData.frequency).toBe('daily');
    expect(component.alertData.recipients).toBe('everyone');
  });

  it('should validate form correctly', () => {
    // Invalid when name is empty
    expect(component.isFormValid()).toBeFalsy();
    
    // Valid when name is provided
    component.alertData.name = 'Test Alert';
    expect(component.isFormValid()).toBeTruthy();
  });

  it('should toggle member selection', () => {
    const memberId = '1';
    
    // Should add member to selection
    component.onMemberToggle(memberId);
    expect(component.isMemberSelected(memberId)).toBeTruthy();
    
    // Should remove member from selection
    component.onMemberToggle(memberId);
    expect(component.isMemberSelected(memberId)).toBeFalsy();
  });

  it('should emit close event', () => {
    spyOn(component.close, 'emit');
    component.onClose();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should emit save event with valid data', () => {
    spyOn(component.save, 'emit');
    component.alertData.name = 'Test Alert';
    
    component.onSave();
    expect(component.save.emit).toHaveBeenCalledWith({
      name: 'Test Alert',
      frequency: 'daily',
      recipients: 'everyone',
      selectedRecipients: []
    });
  });

  it('should not emit save event with invalid data', () => {
    spyOn(component.save, 'emit');
    component.alertData.name = ''; // Invalid
    
    component.onSave();
    expect(component.save.emit).not.toHaveBeenCalled();
  });
});
