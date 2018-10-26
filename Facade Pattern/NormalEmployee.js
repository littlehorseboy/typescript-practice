"use strict";
exports.__esModule = true;
var NormalEmployee = /** @class */ (function () {
    function NormalEmployee(n) {
        this.name = n;
    }
    NormalEmployee.prototype.reward = function () {
        console.log(this.name + " say: ya!");
    };
    return NormalEmployee;
}());
exports.NormalEmployee = NormalEmployee;
