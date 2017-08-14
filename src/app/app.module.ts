import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { GooglecalendarComponent } from './googlecalendar/googlecalendar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RatingComponent } from './rating/rating.component';
import { TableComponent } from './table/table.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { CoachesComponent} from './coaches/coaches.component';
import { HighlightDirective} from "./directives/highlight.directive";
// import { RestangularModule } from 'ngx-restangular';
// import { RestangularConfigFactory } from './shared/restConfig';

import { baseURL} from './shared/baseurl'


import { DishService } from './services/dish.service';
import { CourtService } from './services/court.service';
import { RatingService } from './services/rating.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { CoachesService } from './services/coaches.service';

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        NewsdetailComponent,
        GooglecalendarComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        RatingComponent,
        TableComponent,
        AddplayerComponent,
        CoachesComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // FormsModule,
        HttpModule,
        MaterialModule,
        AppRoutingModule,
        MdButtonModule,
        ReactiveFormsModule,
        // RestangularModule.forRoot(RestangularConfigFactory)
    ],
    providers: [
        DishService,
        CourtService,
        RatingService,
        ProcessHTTPMsgService,
        CoachesService,
        {provide: 'BaseURL', useValue: baseURL},
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
