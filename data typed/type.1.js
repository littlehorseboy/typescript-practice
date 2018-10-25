"use strict";
// Tuple
console.log('-- Tuple --');
var x = ['hello', 60];
console.log(x[0].substr(1));
console.log(x[1].toString(2));
// enum
console.log('-- enum --');
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2);
var colorName = Color2[2];
console.log(colorName);
