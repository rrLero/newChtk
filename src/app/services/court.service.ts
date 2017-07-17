import { Injectable } from '@angular/core';
import { Court } from '../shared/court';
import { COURTS } from '../shared/allcourts';

@Injectable()
export class CourtService {

    constructor() { }

    getCourts(): Court[] {
        return COURTS;
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