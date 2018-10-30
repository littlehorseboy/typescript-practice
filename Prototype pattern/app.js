"use strict";
exports.__esModule = true;
var Prototype_1 = require("./Prototype");
var prototype1 = new Prototype_1.Prototype();
prototype1.saySomething();
var prototype2 = prototype1.clone();
prototype2.saySomething();
prototype1 === prototype2 ? console.log('Yes') : console.log('No');
console.log(Prototype_1.Prototype.prototype);
