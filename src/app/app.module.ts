import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
// import 'hammerjs';

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

import { baseURL} from './shared/baseurl'
import { imageURL } from './shared/imageurl'


import { DishService } from './services/dish.service';
import { CourtService } from './services/court.service';
import { RatingService } from './services/rating.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { CoachesService } from './services/coaches.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        MdButtonModule,
        ReactiveFormsModule
    ],
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
        CoachesComponent
    ],
    providers: [
        DishService,
        CourtService,
        RatingService,
        ProcessHTTPMsgService,
        CoachesService,
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
