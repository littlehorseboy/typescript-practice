export class NormalEmployee {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  reward(): void {
    console.log(`${this.name} say: ya!`);
  }
}
