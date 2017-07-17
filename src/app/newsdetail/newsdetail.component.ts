import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/news';
import { PATH } from '../shared/pathes';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss']
})
export class NewsdetailComponent implements OnInit {
  @Input()
  dish: Dish;
  path = PATH;
  constructor() { }

  ngOnInit() {
  }

}
