import { NewbieCoffeeServer } from "./newbie-coffee-server";
import { ExpressoCoffeeMachine } from "../interfaces/express-coffee-machine";
import { Coffee } from "../interfaces/coffee";

export class IntermediateExpressoCoffeeServer extends NewbieCoffeeServer {
  assignedCoffeeMachine: ExpressoCoffeeMachine;
  constructor(coffeeMachine: ExpressoCoffeeMachine) {
    super(coffeeMachine);
  }

  serveExpresso(): Coffee {
    return this.assignedCoffeeMachine.brewWithExpresso();
  }
}
