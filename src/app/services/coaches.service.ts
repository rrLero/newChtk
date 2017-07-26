import { Injectable } from '@angular/core';
import { Coach } from '../shared/coach';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class CoachesService {

    constructor(private http: Http, private processHTTPMsgService: ProcessHTTPMsgService) { }

    getCoaches(): Observable<Coach[]> {
        return this.http.get(baseURL + 'api/coaches')
            .map(res => { return this.processHTTPMsgService.extractData(res); })
    }
    setActive(id): void {
        let x = document.getElementById(id);
        x.id = 'active';
    }
    setBack(id): void {
        let x = document.getElementById('active');
        x.id = id;
    }

}