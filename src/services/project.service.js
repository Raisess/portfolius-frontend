import api from './api';

export const getAll = username => api
  .get(`/project/getAll/${username}`)
  .then(res => res.data.projects)
  .catch(err => console.error(err));