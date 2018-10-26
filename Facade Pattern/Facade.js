"use strict";
exports.__esModule = true;
var NoobEmployee_1 = require("./NoobEmployee");
var NormalEmployee_1 = require("./NormalEmployee");
var Facade = /** @class */ (function () {
    function Facade() {
        this.employee1 = new NoobEmployee_1.NoobEmployee('Amy');
        this.employee2 = new NormalEmployee_1.NormalEmployee('Ben');
        this.employee3 = new NoobEmployee_1.NoobEmployee('Cherry');
        this.employee4 = new NormalEmployee_1.NormalEmployee('Dimo');
    }
    Facade.prototype.RewardNormalEmployee = function () {
        this.employee2.reward();
        this.employee4.reward();
    };
    Facade.prototype.punishmentMakeMistakeEmployee = function () {
        this.employee1.punishmented();
        this.employee3.punishmented();
    };
    return Facade;
}());
exports.Facade = Facade;
