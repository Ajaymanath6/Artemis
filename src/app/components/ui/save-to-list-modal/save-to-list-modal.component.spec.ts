import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveToListModalComponent } from './save-to-list-modal.component';

describe('SaveToListModalComponent', () => {
  let component: SaveToListModalComponent;
  let fixture: ComponentFixture<SaveToListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveToListModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveToListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
