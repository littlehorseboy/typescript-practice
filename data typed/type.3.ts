// null undefined
let u: undefined = undefined;
let n: null = null;

// never
const error = (message: string): never => {
  throw new Error(message);
};

// error('abcdefg');

const infiniteLoop = (): never => {
  while (true) { }
};

// Object
declare function create(o: object | null): void;

// create({ prop: 0 });
// create(null);
// create(undefined);
// create(5);

// Type Assertions
// 1. angle-bracket
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength);

let someValue2: any = 'this is a string';
let strLength2: number = (someValue2 as string).length;
console.log(strLength2);
