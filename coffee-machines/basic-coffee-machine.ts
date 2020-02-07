// Problem
import { Coffee } from "../interfaces/coffee";
import { CoffeeMachine } from "../interfaces/coffee-machine";

export class BasicCoffeeMachine implements CoffeeMachine {
  coffeeBean: string;
  additionalIngredients: string[];
  constructor(coffeeBean: string) {
    this.coffeeBean = coffeeBean;
    this.additionalIngredients = [];
  }

  brew(): Coffee {
    const coffee = new Coffee(
      `My ${this.coffeeBean} with ${this.additionalIngredients.join(",")}`
    );
    return coffee;
  }
}