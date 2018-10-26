"use strict";
exports.__esModule = true;
var NoobEmployee = /** @class */ (function () {
    function NoobEmployee(n) {
        this.name = n;
    }
    NoobEmployee.prototype.punishmented = function () {
        console.log(this.name + " say: oh no!");
    };
    return NoobEmployee;
}());
exports.NoobEmployee = NoobEmployee;
