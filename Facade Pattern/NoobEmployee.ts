export class NoobEmployee {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  punishmented(): void {
    console.log(`${this.name} say: oh no!`);
  }
}
