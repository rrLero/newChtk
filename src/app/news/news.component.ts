import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Dish} from '../shared/news';
import { DishService } from '../services/dish.service';
import { RatingService } from '../services/rating.service';

import { Player } from '../shared/player';

import 'rxjs/add/operator/switchMap';
import '../../assets/images/Federer.png';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;
  rating: Player[];
  prev: number;
  next: number;
  imageUrl: string;

  constructor(private dishService: DishService, private ratingservice: RatingService, private location: Location,
              private route: ActivatedRoute, @Inject('BaseURL') private BaseURL)  {
      this.imageUrl = 'src/assets/images/Federer.png';
  }

  ngOnInit() {
    this.ratingservice.getRating().subscribe(rating => this.rating = rating);

    this.route.params
        .switchMap((params: Params) => this.dishService.getDishes(+params['page']))
        .subscribe(dishes => {
          this.dishes = dishes;
          if (this.dishes) {
              this.selectedDish = this.dishes[0]
          }
          this.setPrevNext()
        });
  }

  setPrevNext() {
      this.prev = this.dishService.getPrev();
      this.next = this.dishService.getNext();
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
