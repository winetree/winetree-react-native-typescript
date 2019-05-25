import axios from 'axios';

class UserApi {

  private static _instance : UserApi | null = null;

  

  private static getInstance() : UserApi {
    return this._instance || (this._instance = new UserApi());
  }

}
