import { Component, OnInit } from '@angular/core';
import {Court} from '../shared/court';
import {CourtService} from '../services/court.service';
import {PATH_COURTS} from '../shared/pathes';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  path: string = PATH_COURTS;
  court: Court[];

  constructor(private courtservice: CourtService) { }

  ngOnInit() {
    this.court = this.courtservice.getCourts();
  }
  onSelect(id: number) {
    this.courtservice.setActive(id);
  }
  onRemove(id: number) {
    this.courtservice.setBack(id);
  }

}
