import { Routes }                  from '@angular/router';

import { NewsComponent }           from '../news/news.component';
import { NewsdetailComponent }     from '../newsdetail/newsdetail.component';
import { GooglecalendarComponent } from '../googlecalendar/googlecalendar.component';
import { ContactComponent }        from '../contact/contact.component';
import { RatingComponent }         from '../rating/rating.component';
import { AddplayerComponent }      from '../addplayer/addplayer.component';
import { CoachesComponent}         from '../coaches/coaches.component';

export const routes: Routes = [
    {
        path: 'home/:page',
        component: NewsComponent
    },
    {
        path: 'home',
        redirectTo: '/home/1', pathMatch: 'full'
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
        path: 'coaches',
        component: CoachesComponent
    },
    {
        path: 'rating/:year/:id_player',
        component: RatingComponent
    },
    {
        path: 'rating/:year',
        redirectTo: '/rating/:year/3', pathMatch: 'full'
    },
    {
        path: '', redirectTo: '/home/1', pathMatch: 'full'
    },
    {
        path: 'admin/addplayer',
        component: AddplayerComponent
    }
];
