import api from './api';

export const login = ({ username, password }) => api
  .post('/user/login', {
    username: username,
    password: password
  })
  .then(res => {
    const { success } = res.data;

    if (success) {
      return res.data.token;
    }

    return alert('Usuário ou senha incorreta!');
  })
  .catch(err => {
    console.error(err);
    return alert('Usuário ou senha incorreta!');
  });

export const get = username => api
  .get(`/user/get/${username}`)
  .then(res => res.data.user)
  .catch(err => console.error(err));