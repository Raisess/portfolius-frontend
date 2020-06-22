import axios from 'axios';

const uriTest = bool => bool ? 'http://localhost:1939' : '';

const api = axios.create({
  baseURL: uriTest(true),
  timeout: 1000
});

export default api;