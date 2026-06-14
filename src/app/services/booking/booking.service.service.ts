import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { IntBooking } from '../../schemas/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private readonly httpClient = inject(HttpClient);

  private readonly bookingSelected = new BehaviorSubject<IntBooking | null>(null);

  public bookingSelected$ = this.bookingSelected.asObservable().pipe(first((booking) => !!booking));

  public getBookings(): Observable<IntBooking[]> {
    return this.httpClient.get<IntBooking[]>('/bookings');
  }

  public bookingClass(id: number): Observable<void>{
    return this.httpClient.post<void>(`/bookings/reservation${id}`, {});
  }
}
