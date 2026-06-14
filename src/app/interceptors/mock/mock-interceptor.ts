import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { IntBooking } from '../../schemas/booking.interface';

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
  if (req.url === '/bookings' && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: MOCK_BOOKINGS
      })
    ).pipe(
      delay(3000)
    )
  }

  if (req.url === '/bookings/reservation' && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: 'Reserva confirmada'
      })
    ).pipe(
      delay(3000)
    )
  }
  return next(req);
};
