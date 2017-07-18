import { Routes }                  from '@angular/router';

import { NewsComponent }           from '../news/news.component';
import { NewsdetailComponent }     from '../newsdetail/newsdetail.component';
import { GooglecalendarComponent } from '../googlecalendar/googlecalendar.component';
import { ContactComponent }        from '../contact/contact.component';
import { RatingComponent }         from '../rating/rating.component';

export const routes: Routes = [
    {
        path: 'home',
        component: NewsComponent
    },
    {
        path: 'shedule',
        component: GooglecalendarComponent
    },
    {
        path: 'contacts',
        component: ContactComponent
    },
    {
        path: 'rating/:year', component: RatingComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
];
