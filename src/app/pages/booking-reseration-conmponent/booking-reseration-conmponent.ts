import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-booking-reseration-conmponent',
  imports: [],
  templateUrl: './booking-reseration-conmponent.html',
  styleUrl: './booking-reseration-conmponent.scss',
})
export class BookingReserationConmponent {

  private readonly bookingService = inject(BookingService);

  public readonly booking = toSignal(this.bookingService.bookingSelected$, { initialValue: null });
}
