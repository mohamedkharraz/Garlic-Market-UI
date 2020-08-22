import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerUploadComponent } from './ticker-upload.component';

describe('TickerUploadComponent', () => {
  let component: TickerUploadComponent;
  let fixture: ComponentFixture<TickerUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
