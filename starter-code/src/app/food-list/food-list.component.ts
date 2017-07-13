import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foodArray: Object[] = foods;
randomText: string;
foodSearchText: string = "";

  constructor() { }

  ngOnInit() {
    //from import foods(put on right side of =) from ../foods (put on left side of =)
  }

}
