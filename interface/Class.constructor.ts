interface ClockInterface {
  tick(): any;
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}

const createClock = (ctor: ClockConstructor, hour: number, minute: number): ClockInterface => {
  return new ctor(hour, minute);
};

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tick');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tock tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();
