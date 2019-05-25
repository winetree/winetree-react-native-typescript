class Logger {

  private static _instance : Logger;

  public debug(item : object){
    // tslint:disable-next-line: no-console
    console.dir(item);
  }

  public static getInstance(){
    return this._instance || (this._instance = new this);
  }

}

export default Logger.getInstance();