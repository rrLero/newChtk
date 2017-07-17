/**
 * Created by rrlero on 16.07.17.
 */
import { Injectable } from '@angular/core';
import { Player } from '../shared/player';
import { RATING } from '../shared/rating';

@Injectable()
export class RatingService {

    constructor() { }

    getRating(year = 2017): Player[] {
        if (year) {
            return RATING;
        }
    }
}