"use strict";
// any
console.log('-- any --');
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = 8;
console.log(notSure.toFixed());
var prettySure = 4;
// prettySure.toFixed();
console.log(prettySure);
// void
console.log('-- void --');
var warnUser = function () {
    console.log('voidvoidvoid');
};
warnUser();
var unusable = undefined;
var unusable2 = null;
