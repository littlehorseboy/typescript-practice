interface IClockInterface {
  currentTime: Date;
}

class Clock implements IClockInterface {
  currentTime: Date;
  constructor(yyyy: number, mm: number) {
    this.currentTime = new Date();
  }

  public pick(x: number | { s: string }): any {
    if (typeof x === 'number') {
      console.log('number:', x);
    } else if (typeof x === 'object') {
      console.log('object:', x);
    }
  }
}

let clock = new Clock(2, 5);

clock.pick(5);
clock.pick({ s: '1' });
// clock.pick('5');
// clock.pick({ d: '1' });
