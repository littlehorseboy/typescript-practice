interface IShape {
  color: string;
}

interface IPenStroke {
  penWidth: number;
}

interface ISquare extends IShape, IPenStroke {
  sideLength: number;
}

let square = {} as ISquare;

square.color = 'blue';
