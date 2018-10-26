"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(m, n) {
        this.mediator = m;
        this.name = n;
    }
    Person.prototype.told = function (message) {
        console.log(this.name + " \u6536\u5230\u8A0A\u606F: " + message);
    };
    Person.prototype.blameSomeOne = function (message) {
        this.mediator.talkTo('Amy', 'y r dog');
    };
    return Person;
}());
exports.Person = Person;
