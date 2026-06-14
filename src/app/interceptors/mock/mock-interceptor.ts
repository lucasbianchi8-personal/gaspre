import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of, tap } from 'rxjs';
import { IntBooking } from '../../schemas/booking.interface';
import { LoaderService } from '../../services/loader/loader-service';
import { inject } from '@angular/core';

const MOCK_BOOKINGS: IntBooking[] = [
  {
    id: 1,
    className: 'Yoga',
    instructor: 'Lucas',
    schedule: 'Lunes 18:00',
    availableSpots: 1
  },
  {
    id: 1,
    className: 'Crossfit',
    instructor: 'Jose',
    schedule: 'Martes 10:00',
    availableSpots: 0
  },
   {
    id: 2,
    className: 'Spinning',
    instructor: 'Manuel',
    schedule: 'Viernes 12:00',
    availableSpots: 3
  }
]

export const mockInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(LoaderService);
  
  if (req.url === '/bookings' && req.method === 'GET') {
    loaderService.show();
    return of(
      new HttpResponse({
        status: 200,
        body: MOCK_BOOKINGS
      })
    ).pipe(
      delay(3000),
      tap(() => loaderService.hide())
    )
  }

  if (req.url.includes('/bookings/reservation') && req.method === 'POST') {
    loaderService.show();
    return of(
      new HttpResponse({
        status: 200,
        body: 'Reserva confirmada'
      })
    ).pipe(
      delay(3000),
      tap(() => loaderService.hide())
    )
  }
  return next(req);
};
