import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClustersModalComponent } from './select-clusters-modal.component';

describe('SelectClustersModalComponent', () => {
  let component: SelectClustersModalComponent;
  let fixture: ComponentFixture<SelectClustersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClustersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClustersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
