import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryStatisticsComponent } from './telemetry-statistics.component';

describe('TelemetryStatisticsComponent', () => {
  let component: TelemetryStatisticsComponent;
  let fixture: ComponentFixture<TelemetryStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetryStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
