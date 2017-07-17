/**
 * Created by rrlero on 16.07.17.
 */
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RatingService } from '../services/rating.service';

import { Player } from '../shared/player';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    settings = {
        columns: {
            surname: {
                title: 'Surname',
                filter: false,
                width: '90%'
            },
            points: {
                title: 'Points',
                filter: false,
                width: '10%'
            }
        },
        actions: {
            edit: false,
            add: false,
            delete: false
        }
    };
    data: Player[];
    title: string = 'Rating';

    constructor(private route: ActivatedRoute,
                private location: Location,
                private ratingservice: RatingService) { }

    ngOnInit() {
        const year = +this.route.snapshot.params['year'];
        this.data = this.ratingservice.getRating(year);
        console.log(this.data[2].surname)
    }
    goBack(): void {
        this.location.back();
    }
}
