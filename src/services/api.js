import axios from 'axios';
import config from '../../config.json';

export const apiScraping = axios.create({
    baseURL: config.API_SPACETODAY,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
});