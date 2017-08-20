/**
 * Created by rrlero on 16.07.17.
 */
import { Injectable } from '@angular/core';
import { Player } from '../shared/player';
import {WidePlayer} from "../shared/widePlayer";

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class RatingService {

    constructor(private http: Http, private processHTTPMsgService: ProcessHTTPMsgService) { }

    getRating(year = +(new Date()).getFullYear()): Observable<Player[]> {
        return this.http.get(baseURL + 'api/rating/' + year)
            .map(res => { return this.processHTTPMsgService.extractData(res); })
    }
    getWidePlayer(year, idPlayer): Observable<WidePlayer> {
        return this.http.get(baseURL + 'api/player/' + year + '/' + idPlayer)
            .map(res => { return this.processHTTPMsgService.extractData(res); })
    }
}