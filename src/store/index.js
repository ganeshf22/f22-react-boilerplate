

const storeKeys = {
  user: 'user',
};

const User = {
  setToken(token) {
    localStorage.setItem(storeKeys.user, token);
  },
  getToken() {
    const token = localStorage.getItem(storeKeys.user);
    return token ? token : null;
  },
  async clearToken() {
    localStorage.removeItem(storeKeys.user);
  }
};

export { User };
