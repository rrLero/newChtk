import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/news';
import {PATH} from '../shared/pathes';
import { DishService } from '../services/dish.service';
import { RatingService } from '../services/rating.service';

import { Player } from '../shared/player';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  path = PATH;
  dishes: Dish[];
  selectedDish: Dish;
  rating: Player[];

  constructor(private dishService: DishService, private ratingservice: RatingService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.selectedDish = this.dishes[0];
    this.rating = this.ratingservice.getRating();
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
