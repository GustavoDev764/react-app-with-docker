import axios from 'axios';
import serve from '../../serveconfig.json';

export const url = serve.url;

const api = axios.create({
  baseURL: url,
});

export const apiAsync = axios.create({
  baseURL: '',
});

export default api;
