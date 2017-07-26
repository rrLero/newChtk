import { Injectable } from '@angular/core';
import { Court } from '../shared/court';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class CourtService {

    constructor(private http: Http, private processHTTPMsgService: ProcessHTTPMsgService) { }

    getCourts(): Observable<Court[]> {
        return this.http.get(baseURL + 'api/courts')
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