var getCounter = function () {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
};
var ccc = getCounter();
ccc(10);
ccc.reset();
ccc.interval = 5.0;
console.log(ccc);
