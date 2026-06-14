import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-booking-detail-conmponent',
  templateUrl: './booking-detail-conmponent.html'
})
export class BookingDetailConmponent {

  private readonly bookingService = inject(BookingService);

  public readonly booking = toSignal(this.bookingService.bookingSelected$, { initialValue: null });
}
