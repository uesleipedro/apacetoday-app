import axios from 'axios';
import config from '../../config.json';

export const apiScraping = axios.create({
    // baseURL: config.API_SPACETODAY,
    baseURL: 'http://192.168.0.119:3333/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
})

export const apiYoutube = axios.create({
    baseURL: config.API_YOUTUBE,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
})