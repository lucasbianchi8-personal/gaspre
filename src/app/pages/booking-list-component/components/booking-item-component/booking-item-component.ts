import { Component, input, output, signal } from '@angular/core';
import { IntBooking } from '../../../../schemas/booking.interface';

@Component({
  selector: 'app-booking-item-component',
  templateUrl: './booking-item-component.html',
  styleUrl: './booking-item-component.scss',
})
export class BookingItemComponent {
  public readonly index = input.required<number>();
  public readonly booking = input.required<IntBooking>();

  public readonly bookingReservation = output<IntBooking>();

  public readonly showMore = signal(false);

  public onShowMore() {
    this.showMore.set(true);
  }

  public onBookingReservation() {
    this.bookingReservation.emit(this.booking());
  }
}