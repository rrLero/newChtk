import { Component, OnInit, Inject } from '@angular/core';
import {Coach} from '../shared/coach';
import {CoachesService} from '../services/coaches.service';


@Component({
    selector: 'app-coaches',
    templateUrl: './coaches.component.html',
    styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
    coaches: Coach[];

    constructor(private coachesservice: CoachesService, @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
        this.coachesservice.getCoaches().subscribe(coaches => this.coaches = coaches);
    }
    // onSelect(id: number) {
    //     this.coachesservice.setActive(id);
    // }
    // onRemove(id: number) {
    //     this.coachesservice.setBack(id);
    // }

}