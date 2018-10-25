// any
console.log('-- any --');

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = 8;

console.log(notSure.toFixed());

let prettySure: object = 4;
// prettySure.toFixed();
console.log(prettySure);

// void
console.log('-- void --');

const warnUser = (): void => {
  console.log('voidvoidvoid');
};

warnUser();

let unusable: void = undefined;
let unusable2: void = null;
