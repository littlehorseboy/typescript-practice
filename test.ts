// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal, hex, binary, octal);

// string
let color: string = 'blue';
let fullName: string = 'Anders hamburger';
let age: number = 33;
let sentence: string = `Hello, my name is ${ fullName }`;

console.log(sentence);

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number] = ['hello', 60];

console.log(x[0].substr(1));
console.log(x[1].toString(2));

// enum 
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;
console.log(c2);
let colorName: string = Color2[2];
console.log(colorName);
