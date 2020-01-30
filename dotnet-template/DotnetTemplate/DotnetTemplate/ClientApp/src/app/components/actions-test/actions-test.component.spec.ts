import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsTestComponent } from './actions-test.component';

describe('ActionsTestComponent', () => {
  let component: ActionsTestComponent;
  let fixture: ComponentFixture<ActionsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
