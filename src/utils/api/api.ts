import axios from 'axios';

const baseAPI = axios.create();

baseAPI.defaults.baseURL = 'http://localhost:3000';

baseAPI.defaults.timeout = 30000;

export default baseAPI;
