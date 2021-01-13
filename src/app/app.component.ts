import { Component, OnDestroy, OnInit } from "@angular/core";
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
  // this.runLodashExercise();
  // this.runRxjsExercise();
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


    // Exercise 1: Output an array of ingredient that is vege


    // Exercise 2: Output an array of ingredient's price


    // Exercise 3: Output the total price of all ingredient


    // Exericse 4: Combine exercise 1-3, output the total cost of vege ingredientitm =


    // console.log("Exercise 1", newList);
    // console.log("Exercise 2", priceList);
    // console.log("Exercise 3", totalPrice);
    // console.log("Exercise 4", finalAnswer);
  }



















  runLodashExercise() {
    // total up the time need to prepare a vege burger, if no processing is needed, treat it as 0min
    // (hint: try use lodash-get)
  }

























    runRxjsExercise(){

    // Exericse 4: Combine exercise 1-3, output the Total cost of Vege Ingredient

    // By refering the Exericse 4 in the ArrayMethodExercise: 
    // plsease reconstruct the solution in rxjs way.

  }
}
