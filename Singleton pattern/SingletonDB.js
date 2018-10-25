"use strict";
var SingletonDB = /** @class */ (function () {
    function SingletonDB() {
    }
    SingletonDB.getInstanceDB = function () {
        return this._instance || (this._instance = new this());
    };
    SingletonDB.prototype.getInfo = function () {
        return 'I am unique';
    };
    SingletonDB._instance = null;
    return SingletonDB;
}());
var onlyOneDB = SingletonDB.getInstanceDB();
console.log(onlyOneDB.getInfo());
var onlyOneDB2 = SingletonDB.getInstanceDB();
console.log(onlyOneDB2.getInfo());
