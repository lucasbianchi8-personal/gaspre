import { Component, inject, input } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookingItemComponent } from "./components/booking-item-component/booking-item-component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list-component',
  imports: [BookingItemComponent],
  templateUrl: './booking-list-component.html',
  styleUrl: './booking-list-component.scss',
})
export class BookingListComponent {

  private readonly bookingSercice = inject(BookingService);
  private readonly router = inject(Router);

  public readonly bookings = toSignal(this.bookingSercice.getBookings());

  public onBookingClass(bookingId: number): void {
    this.bookingSercice.bookingClass(bookingId).subscribe(() => {
      this.router.navigateByUrl('reservation')
    });
  }
}
