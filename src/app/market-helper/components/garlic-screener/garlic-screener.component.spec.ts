import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarlicScreenerComponent } from './garlic-screener.component';

describe('GarlicScreenerComponent', () => {
  let component: GarlicScreenerComponent;
  let fixture: ComponentFixture<GarlicScreenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarlicScreenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarlicScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
