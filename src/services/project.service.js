import api from './api';

export const getAll = username => api
  .get(`/project/getAll/${username}`)
  .then(res => {
    return res.data.projects;
  })
  .catch(err => {
    throw new Error(err);
  });