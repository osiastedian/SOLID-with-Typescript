import { PremiumCoffeeMachine } from "./premium-coffee-machine";
import { Coffee } from "../interfaces/coffee";

export class StarbucksPremiumCoffeeMachine extends PremiumCoffeeMachine {
  brewWithExpresso() {
    let coffee = super.brewWithExpresso();
    coffee = new Coffee(`[STARTBUCKS PREMIUM] ${coffee.description}`);
    return coffee;
  }
}
