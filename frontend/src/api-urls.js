import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1';
const MOVIES_URL = BASE_URL + '/movies/';
const CATEGORIES_URL = BASE_URL + '/categories/';
const SHOWS_URL = BASE_URL + '/shows/';
const HALLS_URL = BASE_URL + '/halls/';
const LOGIN_URL = BASE_URL + '/login/';
const REGISTER_URL = BASE_URL + '/register/';
const USER_URL = BASE_URL + '/users/';
const TOKEN_LOGIN_URL = '/token-login/';
const REGISTER_ACTIVATE_URL = BASE_URL + '/register/activate/';

const instance = axios.create({
    baseUrl: BASE_URL
});

export {MOVIES_URL, CATEGORIES_URL, BASE_URL, SHOWS_URL, HALLS_URL, LOGIN_URL, REGISTER_URL, USER_URL, TOKEN_LOGIN_URL, REGISTER_ACTIVATE_URL}

export default instance;