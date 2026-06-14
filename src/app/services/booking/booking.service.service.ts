import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable, tap } from 'rxjs';
import { IntBooking } from '../../schemas/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private readonly httpClient = inject(HttpClient);

  private readonly bookingSelected = new BehaviorSubject<IntBooking | null>(null);

  public readonly bookingSelected$ = this.bookingSelected.asObservable().pipe(first((booking) => !!booking));

  public getBookings(): Observable<IntBooking[]> {
    return this.httpClient.get<IntBooking[]>('/bookings');
  }

  public bookingReservation(booking: IntBooking): Observable<void>{
    return this.httpClient.post<void>(`/bookings/reservation/${booking.id}`, {}).pipe(tap(() => this.bookingSelected.next(booking)));
  }
}
