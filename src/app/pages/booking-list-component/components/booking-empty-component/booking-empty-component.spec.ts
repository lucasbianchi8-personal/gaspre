import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEmptyComponent } from './booking-empty-component';

describe('BookingEmptyComponent', () => {
  let component: BookingEmptyComponent;
  let fixture: ComponentFixture<BookingEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingEmptyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingEmptyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
