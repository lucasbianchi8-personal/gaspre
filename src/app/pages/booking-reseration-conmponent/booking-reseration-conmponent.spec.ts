import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReserationConmponent } from './booking-reseration-conmponent';

describe('BookingReserationConmponent', () => {
  let component: BookingReserationConmponent;
  let fixture: ComponentFixture<BookingReserationConmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingReserationConmponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingReserationConmponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
