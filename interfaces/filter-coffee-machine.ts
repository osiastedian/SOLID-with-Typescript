import { CoffeeMachine } from "./coffee-machine";
import { Coffee } from "./coffee";

export interface FilterCoffeeMachine extends CoffeeMachine {
  brewWithFilter(): Coffee;
}
