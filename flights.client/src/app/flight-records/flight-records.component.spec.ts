import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRecordsComponent } from './flight-records.component';

describe('FlightRecordsComponent', () => {
  let component: FlightRecordsComponent;
  let fixture: ComponentFixture<FlightRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
