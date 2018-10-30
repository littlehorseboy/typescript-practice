"use strict";
exports.__esModule = true;
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.saySomething = function () {
        console.log('hello!');
    };
    Prototype.prototype.clone = function () {
        var cloned = Object.create(Prototype.prototype || null);
        return cloned;
    };
    return Prototype;
}());
exports.Prototype = Prototype;
