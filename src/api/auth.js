import axios from 'axios';

class Token {
  constructor() {
    this.token = '';
    this.populateFromBrowser()
  }

  populateFromBrowser() {
    this.token = localStorage.getItem("token") || ''
  }

  getToken() {
    return this.token;
  }

  setToken(t) {
    document.cookie = "token=" + t;
    this.token = t;
    localStorage.setItem("token", t)
  }
}

export const transporterToken = new Token();
export const shipperToken = new Token();

const api = 'http://localhost:5000';

class Auth {
  async loginAsTransporter() {
    let data = await axios.post(`${api}/auth/login`, {
      email: 'transporter@gmail.com',
      password: '123',
    });

    transporterToken.setToken(data.token);
  }

  async loginAsShipper() {
    let data = await axios.post(`${api}/auth/login`, {
      email: 'shipper@gmail.com',
      password: '123',
    });

    transporterToken.setToken(data.token);
  }
}

const auth = new Auth();

export default auth;
