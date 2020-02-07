import { CoffeeMachine } from "./coffee-machine";
import { Coffee } from "./coffee";

export interface ExpressoCoffeeMachine extends CoffeeMachine {
  brewWithExpresso(): Coffee;
}
