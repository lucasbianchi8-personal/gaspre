import { Routes } from '@angular/router';
import { BookingListComponent } from './pages/booking-list-component/booking-list-component';

export const routes: Routes = [
    {
        path: '',
        component: BookingListComponent
    },
    {
        path: '**',
        component: BookingListComponent
    }
];
