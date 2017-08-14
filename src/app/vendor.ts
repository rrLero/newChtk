import '@angular/platform-browser';
import '@angular/core';
import '@angular/common';
import '@angular/router';
// import 'ngx-restangular';

import '@angular/material'
import 'hammerjs';
import 'jquery';
import 'tether';
import 'bootstrap';

import '@angular/platform-browser/animations';
import '@angular/http';
// import '@angular/forms';
// import '@angular/animations';

import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'font-awesome/scss/font-awesome';


if (process.env.ENV === 'dev') {
    require('@angular/platform-browser-dynamic');
    require('@angular/compiler');
} else {
    require('../../.htaccess');
}
