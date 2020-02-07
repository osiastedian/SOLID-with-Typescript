import { ExpressoCoffeeMachine } from "../interfaces/express-coffee-machine";
import { Coffee } from "../interfaces/coffee";

export class PremiumCoffeeMachine implements ExpressoCoffeeMachine {
  coffeeBean: string;
  additionalIngredients: string[];
  constructor(coffeeBean: string) {
    this.coffeeBean = coffeeBean;
    this.additionalIngredients = [];
  }

  brew(): Coffee {
    let coffee = new Coffee(
      `My Premium ${this.coffeeBean} with ${this.additionalIngredients.join(
        ","
      )}`
    );
    coffee = this.addFiness(coffee);
    return coffee;
  }

  brewWithExpresso(): Coffee {
    let coffee = new Coffee(
      `My Premium Expresso ${
        this.coffeeBean
      } with ${this.additionalIngredients.join(",")}`
    );
    coffee = this.addFiness(coffee);
    return coffee;
  }

  private addFiness(coffee: Coffee) {
    const addedFiness = ["Peppermint", "Chocolate"];
    return new Coffee(
      `${coffee.description}, Finess: ${addedFiness.join(",")}`
    );
  }
}
