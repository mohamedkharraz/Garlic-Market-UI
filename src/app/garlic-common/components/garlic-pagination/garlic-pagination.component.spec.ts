import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarlicPaginationComponent } from './garlic-pagination.component';

describe('GarlicPaginationComponent', () => {
  let component: GarlicPaginationComponent;
  let fixture: ComponentFixture<GarlicPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarlicPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarlicPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
