import { Component, OnDestroy, OnInit } from "@angular/core";
import _ from "lodash";
import {
  of,
  combineLatest,
  Observable,
  from,
  interval,
  BehaviorSubject,
  Subject
} from "rxjs";
import {
  tap,
  delay,
  concatMap,
  map,
  filter,
  toArray,
  scan,
  reduce,
  pluck,
  takeLast,
  takeUntil,
  last
} from "rxjs/operators";
import { cloneDeep } from "lodash-es";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {
    // this.runArrayMethodExercise();
    this.runLodashExercise();
    this.runRxjsExercise();
  }

  ingredient = [
    {
      raw: "🐔",
      processInfo: { processed: "🍗", duration: 10 },
      isVege: false,
      price: 1,
      name: "Chicken"
    },
    {
      raw: "🐮",
      processInfo: { processed: "🥩", duration: 5 },
      isVege: false,
      price: 2,
      name: "Beef"
    },
    {
      raw: "🐟",
      processInfo: { processed: "🐟", duration: 15 },
      isVege: false,
      price: 2.5,
      name: "Tuna"
    },
    { raw: "🧀", isVege: true, price: 1.5, name: "Cheese" },
    { raw: "🍄", isVege: true, price: 0.5, name: "Mushroom" },
    { raw: "🍍", isVege: true, price: 0.5, name: "Pineapple" },
    { raw: "🍅", isVege: true, price: 0.5, name: "Tomato" },
    {
      raw: "🌾",
      processInfo: { processed: "🍞", duration: 20 },
      isVege: true,
      price: 0.5,
      name: "Bread"
    }
  ];

  runArrayMethodExercise() {
    // Given the ingredient list,

    function isVege(itm, index) {
      return itm.isVege;
    }
    const vegeIngredient1 = this.ingredient.filter(v => v.isVege);
    // Exercise 1: Output an array of ingredient that is vege

    const vegeIngredient2: any[] = this.ingredient.filter((v, index) => {
      return v.isVege;
    });
    const vegeIngredient3: any[] = this.ingredient.filter(function(v, index) {
      return v.isVege;
    });
    const vegeIngredient4: any[] = this.ingredient.filter(isVege.bind(this));
    console.log("Vege Ingredient1", vegeIngredient1);
    console.log("Vege Ingredient2", vegeIngredient2);
    console.log("Vege Ingredient3", vegeIngredient3);
    console.log("Vege Ingredient4", vegeIngredient4);

    // Exercise 2: Output an array of ingredient's price
    console.log("Ingredient Price", this.ingredient.map(v => v.price));

    // Exercise 3: Output the total price of all ingredient
    const totalPrice = this.ingredient.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    console.log(totalPrice);

    // Exercise 4: Combine exercise 1-3, output the total cost of vege ingredient
    const totalPriceVege = this.ingredient
      .filter(v => v.isVege)
      .map(v => v.price)
      .reduce((acc, cur, index) => acc + cur, 0);
    console.log(totalPriceVege);
  }

  runLodashExercise() {
    // total up the time need to prepare a vege burger, if no processing is needed, treat it as 0min
    // (hint: try use lodash-get)
    const totalDuration: any[] = this.ingredient
      .filter(v => v.isVege)
      .reduce((acc, cur) => acc + _.get(cur, "processInfo.duration", 0), 0);

    console.log("Total Time", totalDuration);
  }

  runRxjsExercise() {
    // Exericse 4: Combine exercise 1-3, output the Total cost of Vege Ingredient
    // By refering the Exericse 4 in the ArrayMethodExercise:
    // plsease reconstruct the solution in rxjs way.
    const totalPriceVege = this.ingredient
      .filter(v => v.isVege)
      .map(v => v.price)
      .reduce((acc, cur, index) => acc + cur, 0);
    console.log(totalPriceVege);

    // 'from' accept array input
    const ingreList = from(this.ingredient)
      .pipe(
        // ** need to know the usage of each Operator and what each of them return **

        // return Vege Object Array
        filter(v => v.isVege),
        // return Vege's Price Array
        map(v => v.price),
        // 'tap', emits latest value from 'Observable'
        tap(v => {
          // print each of Vege's price in Vege's Price Array
          console.log(v);
        }),
        // Emits output of total of Vege's Price (Become the 'value' in '.subscribe(value....))
        reduce((acc, cur, index) => acc + cur, 0)
      )
      .subscribe(value => {
        console.log("Final Value", value);
      });
  }
}
