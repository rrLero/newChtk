import { Component, OnInit, Input, Inject } from '@angular/core';

import { Dish } from '../shared/news';
import {inject} from '@angular/core/testing';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss']
})
export class NewsdetailComponent implements OnInit {
  @Input()
  dish: Dish;
  constructor(@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

}
