import axios from 'axios';

const api = axios.create({baseURL: 'https://challenge-unicad-node-api.herokuapp.com/entregas'});

export default api;