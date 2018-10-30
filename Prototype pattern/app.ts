import { Prototype } from "./Prototype";

const prototype1: Prototype = new Prototype();
prototype1.saySomething();

const prototype2: Prototype = prototype1.clone();
prototype2.saySomething();

prototype1 === prototype2 ? console.log('Yes') : console.log('No');

console.log(Prototype.prototype);
