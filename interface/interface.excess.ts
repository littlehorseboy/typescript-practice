interface ISquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

const createSquare = (config: ISquareConfig): { color: string; area: number } => {
  const newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
};

let mySquare = createSquare({ width: 100, opacity: 0.5 });
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as ISquareConfig);
console.log(mySquare);
