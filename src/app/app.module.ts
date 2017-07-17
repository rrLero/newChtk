import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule } from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { GooglecalendarComponent } from './googlecalendar/googlecalendar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RatingComponent } from './rating/rating.component';

import { DishService } from './services/dish.service';
import { CourtService } from './services/court.service';
import { RatingService } from './services/rating.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        MdButtonModule,
        Ng2SmartTableModule,

    ],
    declarations: [
        AppComponent,
        NewsComponent,
        NewsdetailComponent,
        GooglecalendarComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        RatingComponent
    ],
    providers: [DishService, CourtService, RatingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
