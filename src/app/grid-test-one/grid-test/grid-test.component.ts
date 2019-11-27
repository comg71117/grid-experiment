import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-grid-test',
    templateUrl: './grid-test.component.html',
    styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent implements OnInit {
    public items: object = [];

    constructor() {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    }

    ngOnInit() {

    }

}
