"use strict";
// interface ISearchFunc {
//   (source: string, subString: string): boolean;
// }
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('123', '23'));
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch2('45678', '87'));
