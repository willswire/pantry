import { Component, OnInit } from "@angular/core";

export interface Food {
  name: string;
  expired: Date;
  icon: string;
}

export interface Item {
  name: string;
  icon: string;
}

@Component({
  selector: "app-had",
  templateUrl: "./had.component.html",
  styleUrls: ["./had.component.css"]
})
export class HadComponent implements OnInit {
  foods: Food[] = [
    {
      name: "Cake",
      expired: new Date("1/1/16"),
      icon: "cake"
    },
    {
      name: "Pizza",
      expired: new Date("1/17/16"),
      icon: "local_pizza"
    },
    {
      name: "Coffee",
      expired: new Date("1/28/16"),
      icon: "emoji_food_beverage"
    }
  ];

  items: Item[] = [
    {
      name: "Thread",
      icon: "gesture"
    },
    {
      name: "Gift Card",
      icon: "card_giftcard"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
