import { Injectable } from '@angular/core';
import { Dish } from '../shared/news';
import { DISHES } from '../shared/allnews';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
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
