import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntBooking } from '../../schemas/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private readonly httpClient = inject(HttpClient);

  getBookings(): Observable<IntBooking[]> {
    return this.httpClient.get<IntBooking[]>('/bookings');
  }
}
