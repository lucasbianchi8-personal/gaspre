import { Component, DestroyRef, inject, input } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { BookingItemComponent } from "./components/booking-item-component/booking-item-component";
import { Router } from '@angular/router';
import { IntBooking } from '../../schemas/booking.interface';
import { BookingEmptyComponent } from "./components/booking-empty-component/booking-empty-component";

@Component({
  selector: 'app-booking-list-component',
  imports: [BookingItemComponent, BookingEmptyComponent],
  templateUrl: './booking-list-component.html',
  styleUrl: './booking-list-component.scss',
})
export class BookingListComponent {

  private readonly bookingSercice = inject(BookingService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  public readonly bookings = toSignal(this.bookingSercice.getBookings());

  public onBookingReservation(booking: IntBooking): void {
    this.bookingSercice.bookingReservation(booking)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.router.navigateByUrl('detail')
    });
  }
}
