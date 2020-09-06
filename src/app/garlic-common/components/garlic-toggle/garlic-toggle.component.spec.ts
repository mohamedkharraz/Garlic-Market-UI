import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarlicToggleComponent } from './garlic-toggle.component';

describe('GarlicToggleComponent', () => {
  let component: GarlicToggleComponent;
  let fixture: ComponentFixture<GarlicToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarlicToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarlicToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
