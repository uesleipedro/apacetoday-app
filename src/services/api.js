import axios from 'axios';
import config from '../../config.json';

export const api = axios.create({
  baseURL: config.API_SPACETODAY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export const apiSpreaker = axios.create({
  baseURL: config.API_SPREAKER,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
