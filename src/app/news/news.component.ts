import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/news';
import {PATH} from '../shared/pathes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  path = PATH;
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.selectedDish = this.dishes[0];
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  onSetup(id: number) {
    this.dishService.setActive(id);
  }
  onRemove(id: number) {
    this.dishService.setBack(id);
  }

}
