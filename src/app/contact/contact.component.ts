import { Component, OnInit, Inject } from '@angular/core';
import {Court} from '../shared/court';
import {CourtService} from '../services/court.service';
import {flyInOut} from "../animations/app.animation";


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut()
    ]
})
export class ContactComponent implements OnInit {
    court: Court[];

    constructor(private courtservice: CourtService, @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
      this.courtservice.getCourts().subscribe(court => this.court = court);
    }
    onSelect(id: number) {
      this.courtservice.setActive(id);
    }
    onRemove(id: number) {
      this.courtservice.setBack(id);
    }
}
