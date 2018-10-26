"use strict";
exports.__esModule = true;
var Mediator_1 = require("./Mediator");
var mediator = new Mediator_1.Mediator();
mediator.person1.told('some');
mediator.person2.told('thing');
mediator.talkTo('Amy', '告訴你喔');
mediator.person1.blameSomeOne('');
