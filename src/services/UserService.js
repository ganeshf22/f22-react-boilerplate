import API from '../api/manager';
import config from '../api/config';

const login = data => {
  return API(
    {
      method: 'POST',
      url: config.urls.auth.login,
      data
    },
    false,
  );
};

export const UserService = {
  login,
};
