import {
  CoffeeMachine,
  FilterCoffeeMachine,
  ExpressoCoffeeMachine
} from "./interfaces";
import {
  BasicCoffeeMachine,
  UpgradedCoffeeMachine,
  PremiumCoffeeMachine,
  StarbucksPremiumCoffeeMachine
} from "./coffee-machines";

import {
  NewbieCoffeeServer,
  IntermediateExpressoCoffeeServer,
  IntermediateFilteredCoffeeServer
} from "./coffee-servers";

let coffeeMachine: CoffeeMachine = new BasicCoffeeMachine("Americano");
console.log(coffeeMachine.brew());
coffeeMachine = new UpgradedCoffeeMachine("Cappucinno");
console.log(coffeeMachine.brew());
coffeeMachine = new PremiumCoffeeMachine("Latte");
console.log(coffeeMachine.brew());

let filterMachine: FilterCoffeeMachine = new UpgradedCoffeeMachine("Cappucino");
console.log(filterMachine.brewWithFilter());

let expressoMachine: ExpressoCoffeeMachine = new PremiumCoffeeMachine("Latte");
console.log(expressoMachine.brewWithExpresso());
expressoMachine = new StarbucksPremiumCoffeeMachine("Latte");
console.log(expressoMachine.brewWithExpresso());

const server1 = new NewbieCoffeeServer(new BasicCoffeeMachine("Americano"));
const server2 = new NewbieCoffeeServer(new UpgradedCoffeeMachine("Americano"));
const server3 = new IntermediateExpressoCoffeeServer(
  new StarbucksPremiumCoffeeMachine("Americano")
);
const server4 = new IntermediateFilteredCoffeeServer(
  new UpgradedCoffeeMachine("Cappucino")
);
console.table([
  server1.serve(),
  server2.serve(),
  server3.serve(),
  server3.serveExpresso(),
  server4.serve(),
  server4.serverFiltered()
]);
