class Token {
  constructor() {
    this.token = '';
  }

  getToken() {
    return this.token;
  }

  setToken(t) {
    this.token = t;
  }
}

export const transporterToken = new Token();
export const shipperToken = new Token();

class Auth {
  async loginAsTransporter() {
    transporterToken.setToken('transporterToken');
  }

  async loginAsShipper() {
    transporterToken.setToken('transporterToken');
  }
}

const auth = new Auth();

export default auth;
