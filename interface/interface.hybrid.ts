interface ICounter {
  (start: number): string;
  interval: number;
  reset(): void;
}

const getCounter = (): ICounter => {
  const counter = <ICounter>function (start: number) { };
  counter.interval = 123;
  counter.reset = () => { };
  return counter;
};

const ccc = getCounter();
ccc(10);
ccc.reset();
ccc.interval = 5.0;
console.log(ccc);
