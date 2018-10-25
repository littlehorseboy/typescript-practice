class SingletonDB {
  private static _instance: SingletonDB = new SingletonDB();

  private constructor() {

  }

  public static getInstanceDB() {
    return this._instance;
  }

  public getInfo():string {
    return 'I am unique';
  }
}

let onlyOneDB = SingletonDB.getInstanceDB();
console.log(onlyOneDB.getInfo());
