"use strict";
var SingletonDB = /** @class */ (function () {
    function SingletonDB() {
    }
    SingletonDB.getInstanceDB = function () {
        return this._instance;
    };
    SingletonDB.prototype.getInfo = function () {
        return 'I am unique';
    };
    SingletonDB._instance = new SingletonDB();
    return SingletonDB;
}());
var onlyOneDB = SingletonDB.getInstanceDB();
console.log(onlyOneDB.getInfo());
