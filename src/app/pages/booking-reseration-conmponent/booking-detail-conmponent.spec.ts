import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailConmponent } from './booking-detail-conmponent';

describe('BookingDetailConmponent', () => {
  let component: BookingDetailConmponent;
  let fixture: ComponentFixture<BookingDetailConmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDetailConmponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDetailConmponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
