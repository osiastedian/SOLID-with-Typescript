import { BasicCoffeeMachine } from "./basic-coffee-machine";
import { FilterCoffeeMachine } from "../interfaces/filter-coffee-machine";
import { Coffee } from "../interfaces/coffee";

export class UpgradedCoffeeMachine extends BasicCoffeeMachine
  implements FilterCoffeeMachine {
  constructor(coffeeBean: string) {
    super(coffeeBean);
  }
  brew(): Coffee {
    this.additionalIngredients.push("");
    const brewed = super.brew();
    return new Coffee(`Upgraded Drink! ${brewed.description}`);
  }
  brewWithFilter(): Coffee {
    const coffee = new Coffee(
      `My Upgraded Filtered Coffee ${
        this.coffeeBean
      } with ${this.additionalIngredients.join(",")}`
    );
    return coffee;
  }
}
