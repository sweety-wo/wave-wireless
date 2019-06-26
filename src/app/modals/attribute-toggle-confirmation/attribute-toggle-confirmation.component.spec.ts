import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeToggleConfirmationComponent } from './attribute-toggle-confirmation.component';

describe('AttributeToggleConfirmationComponent', () => {
  let component: AttributeToggleConfirmationComponent;
  let fixture: ComponentFixture<AttributeToggleConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeToggleConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeToggleConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
