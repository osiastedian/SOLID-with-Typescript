import { FilterCoffeeMachine } from "../interfaces/filter-coffee-machine";
import { Coffee } from "../interfaces/coffee";
import { NewbieCoffeeServer } from "./newbie-coffee-server";

export class IntermediateFilteredCoffeeServer extends NewbieCoffeeServer {
  assignedCoffeeMachine: FilterCoffeeMachine;
  constructor(coffeeMachine: FilterCoffeeMachine) {
    super(coffeeMachine);
  }

  serverFiltered(): Coffee {
    return this.assignedCoffeeMachine.brewWithFilter();
  }
}
