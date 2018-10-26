import { Mediator } from "./Mediator";

export class Person {
  private mediator: Mediator;
  public name: string;

  constructor(m: Mediator, n: string) {
    this.mediator = m;
    this.name = n;
  }

  public told(message: string): void {
    console.log(`${this.name} 收到訊息: ${message}`);
  }

  public blameSomeOne(message: string): void {
    this.mediator.talkTo('Amy', 'y r dog');
  }
}
