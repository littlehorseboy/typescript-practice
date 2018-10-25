interface IStringArray {
  [index: number]: string;
}

let myArray: IStringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

console.log(myStr);
