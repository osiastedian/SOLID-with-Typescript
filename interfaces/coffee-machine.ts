import { Coffee } from "./coffee";

export interface CoffeeMachine {
  brew(): Coffee;
}
