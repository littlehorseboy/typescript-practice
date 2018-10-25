// boolean
let isDone: boolean = false;

// number
console.log('-- number --');

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal, hex, binary, octal);

// string
console.log('-- string --');

let color: string = 'blue';
let fullName: string = 'Anders hamburger';
let age: number = 33;
let sentence: string = `Hello, my name is ${ fullName }`;

console.log(sentence);

// Array
console.log('-- Array --');

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(list);
console.log(list2);
