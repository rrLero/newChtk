/**
 * Created by rrlero on 17.07.17.
 */
import { Component, OnInit, Input} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RatingService } from '../services/rating.service';

import { Player } from '../shared/player';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input()
    rating: Player;

    settings = {
        columns: {
            place: {
                title: 'Place',
                filter: false,
                width: '10%'
            },
            surname: {
                title: 'Surname',
                filter: false,
                width: '80%'
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

    constructor(private route: ActivatedRoute,
                private location: Location,
                private ratingservice: RatingService) { }

    ngOnInit() {
        // const year = +this.route.snapshot.params['year'];
        this.route.params.switchMap((params: Params) => this.ratingservice.getRating(+params['year'] || 2017))
            .subscribe(data => {this.data = data});
        // this.ratingservice.getRating(year).subscribe(data => this.data = data);
    }
    goBack(): void {
        this.location.back();
    }
}