import { Routes } from '@angular/router';
import { BookingListComponent } from './pages/booking-list-component/booking-list-component';
import { BookingDetailConmponent } from './pages/booking-reseration-conmponent/booking-detail-conmponent';

export const routes: Routes = [
    {
        path: '',
        component: BookingListComponent
    },
    {
        path: 'detail',
        component: BookingDetailConmponent
    },
    {
        path: '**',
        component: BookingListComponent
    },
];
