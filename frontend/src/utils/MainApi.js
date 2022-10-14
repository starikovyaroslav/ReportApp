class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getUsersInfo() {
    return fetch(`${this.url}`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  searchInfo(value) {
    return fetch(`${this.url}?term=${value}`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new MainApi({
  url: "http://127.0.0.1:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
