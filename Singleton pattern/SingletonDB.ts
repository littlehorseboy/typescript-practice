class SingletonDB {
  private static _instance: SingletonDB = null;

  private constructor() {

  }

  public static getInstanceDB() {
    return this._instance || (this._instance = new this());
  }

  public getInfo():string {
    return 'I am unique';
  }
}

let onlyOneDB = SingletonDB.getInstanceDB();
console.log(onlyOneDB.getInfo());

let onlyOneDB2 = SingletonDB.getInstanceDB();
console.log(onlyOneDB2.getInfo());
