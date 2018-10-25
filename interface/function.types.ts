// interface ISearchFunc {
//   (source: string, subString: string): boolean;
// }

type ISearchFunc = (source: string, subString: string) => boolean;

let mySearch: ISearchFunc;
mySearch = (source: string, subString: string) => {
  const result = source.search(subString);
  return result > -1;
};

console.log(mySearch('123', '23'));

let mySearch2: ISearchFunc;
mySearch2 = (src: string, sub: string): boolean => {
  const result = src.search(sub);
  return result > -1;
};

console.log(mySearch2('45678', '87'));
