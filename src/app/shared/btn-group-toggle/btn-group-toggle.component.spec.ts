import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupToggleComponent } from './btn-group-toggle.component';

describe('BtnGroupToggleComponent', () => {
  let component: BtnGroupToggleComponent;
  let fixture: ComponentFixture<BtnGroupToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
