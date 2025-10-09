import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritesLayoutComponent } from './my-favorites-layout.component';

describe('MyFavoritesLayoutComponent', () => {
  let component: MyFavoritesLayoutComponent;
  let fixture: ComponentFixture<MyFavoritesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFavoritesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavoritesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
