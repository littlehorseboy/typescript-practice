"use strict";
var Clock = /** @class */ (function () {
    function Clock(yyyy, mm) {
        this.currentTime = new Date();
    }
    Clock.prototype.pick = function (x) {
        if (typeof x === 'number') {
            console.log('number:', x);
        }
        else if (typeof x === 'object') {
            console.log('object:', x);
        }
    };
    return Clock;
}());
var clock = new Clock(2, 5);
clock.pick(5);
clock.pick({ s: '1' });
// clock.pick('5');
// clock.pick({ d: '1' });
