import { Component, DestroyRef, inject, input } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
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
  private readonly destroyRef = inject(DestroyRef);

  public readonly bookings = toSignal(this.bookingSercice.getBookings());

  public onBookingClass(bookingId: number): void {
    this.bookingSercice.bookingClass(bookingId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.router.navigateByUrl('reservation')
    });
  }
}
