import { Injectable } from '@angular/core';
import { Dish } from '../shared/news';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  step: number;
  prev: number;
  next: number;

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(page): Observable<Dish[]> {
    this.step = 4;
    return this.http.get(baseURL + 'api/news').map(res => {
        return this.getArray(this.step, this.processHTTPMsgService.extractData(res), page)
        })
  };

  getArray(step, array, page): Dish[] {
      let quantity = Math.ceil(array.length / step);
      let newArray = [];
      for (let i = 0; i < quantity; i++) {
          newArray[i] = [];
          for (let j = 0; j < step && i * step + j < array.length; j++) {
              newArray[i].push(array[i * step + j]);
          }
      }
      this.prev = page > 1 ? +page - 1 : NaN;
      this.next = page < quantity ? +page + 1 : NaN;
      return newArray[page - 1]
  };

  getPrev(): number {
    return this.prev
  }
  getNext(): number {
      return this.next
  }

  setActive(id): void {
    let x = document.getElementById(id);
    x.id = 'active';
  };

  setBack(id): void {
    let x = document.getElementById('active');
    x.id = id;
  }
}
