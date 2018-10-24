interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = (source: string, subString: string) => {
  let result = source.search(subString);
  return result > -1;
};

console.log(mySearch('123', '23'));


let mySearch2: SearchFunc;
mySearch2 = (src: string, sub: string): boolean => {
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch2('45678', '87'));
