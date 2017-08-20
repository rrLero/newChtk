/**
 * Created by rrlero on 16.07.17.
 */
import { Component, OnInit, Inject} from '@angular/core';
import {flyInOut, visibility, expand} from "../animations/app.animation";
import { Params, ActivatedRoute } from '@angular/router';
import {RatingService} from "../services/rating.service";
import {WidePlayer} from "../shared/widePlayer";

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    host: {
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut(),
        visibility(),
        expand()
    ]
})
export class RatingComponent implements OnInit {

    widePlayer: WidePlayer;
    visibility = 'shown';

    constructor(private route: ActivatedRoute , private ratingservice: RatingService, @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
        // const year = +this.route.snapshot.params['year'];
        // const idPlayer = +this.route.snapshot.params['id_player'];
        // this.ratingservice.getWidePlayer(year, idPlayer).subscribe(widePlayer => {
        //     this.widePlayer = widePlayer;
        // });
        this.route.params
            .switchMap((params: Params) => {
            this.visibility = 'hidden';
            return this.ratingservice.getWidePlayer(+params['year'], params['id_player'])
        }).subscribe(widePlayer => {
                this.widePlayer = widePlayer;
                this.visibility = 'shown';
            });
    }
}
