// any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = 8;
console.log(notSure.toFixed());
var prettySure = 4;
prettySure.toFixed();
console.log(prettySure);
// void
var warnUser = function () {
    console.log('voidvoid');
};
warnUser();
var unusable = undefined;
var unusable2 = null;
// null undefined
var u = undefined;
var n = null;
// never
var error = function (message) {
    throw new Error(message);
};
// error('abcdefg');
var infiniteLoop = function () {
    while (true) {
    }
};
// create({ prop: 0 });
// create(null);
// create(undefined);
// create(5);
// Type Assertions
// 1. angle-bracket
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
var someValue2 = 'this is a string';
var strLength2 = someValue2.length;
console.log(strLength2);
