// Tuple
console.log('-- Tuple --');

let x: [string, number] = ['hello', 60];

console.log(x[0].substr(1));
console.log(x[1].toString(2));

// enum
console.log('-- enum --');

enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c);

enum Color2 { Red = 1, Green, Blue };
let c2: Color2 = Color2.Green;
console.log(c2);
let colorName: string = Color2[2];
console.log(colorName);
