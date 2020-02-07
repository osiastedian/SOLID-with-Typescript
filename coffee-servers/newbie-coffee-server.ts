import { CoffeeMachine } from "../interfaces/coffee-machine";
import { Coffee } from "../interfaces/coffee";

export class NewbieCoffeeServer {
  assignedCoffeeMachine: CoffeeMachine;
  constructor(coffeeMachine: CoffeeMachine) {
    this.assignedCoffeeMachine = coffeeMachine;
  }
  serve(): Coffee {
    return this.assignedCoffeeMachine.brew();
  }
}
