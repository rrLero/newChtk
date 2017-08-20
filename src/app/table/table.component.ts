/**
 * Created by rrlero on 17.07.17.
 */
import { Component, OnInit, Input} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RatingService } from '../services/rating.service';
import { flyInOut} from "../animations/app.animation";

import { Player } from '../shared/player';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut()
    ]
})
export class TableComponent implements OnInit {
    @Input()
    rating: Player[];
    data: Player[];
    year: number;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private ratingservice: RatingService) { }

    ngOnInit() {
        this.year = +(new Date()).getFullYear();
        // const year = +this.route.snapshot.params['year'];
        this.route.params.switchMap((params: Params) => this.ratingservice.getRating(+params['year'] || this.year))
            .subscribe(rating => {
                if (this.location.path().includes('/home/')) {
                    this.rating = rating.splice(0, 10);
                } else {
                    this.rating = rating;
                }
            });
    }
    goBack(): void {
        this.location.back();
    }
}