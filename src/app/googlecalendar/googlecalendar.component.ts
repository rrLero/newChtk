/**
 * Created by rrlero on 14.07.17.
 */
import { Component, OnInit } from '@angular/core';
import {flyInOut} from "../animations/app.animation";

@Component({
    selector: 'google-cal',
    templateUrl: './googlecalendar.component.html',
    styleUrls: ['./googlecalendar.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut()
    ]
})
export class GooglecalendarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}