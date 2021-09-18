import axios from 'axios';

export const apiScraping = axios.create({
    baseURL: 'https://spacetoday.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8' 
    },
})

export const apiYoutube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8' 
    },
})