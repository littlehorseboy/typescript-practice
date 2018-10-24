var createSquare = function (config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};
var mySquare = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare);
