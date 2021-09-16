import axios from 'axios';

export const apiScraping = axios.create({
    baseURL: 'https://spacetoday.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8' 
    },
})