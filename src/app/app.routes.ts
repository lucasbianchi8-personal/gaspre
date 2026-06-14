import { Routes } from '@angular/router';
import { BookingListComponent } from './pages/booking-list-component/booking-list-component';
import { BookingReserationConmponent } from './pages/booking-reseration-conmponent/booking-reseration-conmponent';

export const routes: Routes = [
    {
        path: '',
        component: BookingListComponent
    },
    {
        path: 'reservation',
        component: BookingReserationConmponent
    },
    {
        path: '**',
        component: BookingListComponent
    },
];
