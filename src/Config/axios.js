import axios from 'axios';

// crear una nueva instancia de Axios
const instance = axios.create({
    baseURL:"http://localhost:8080/api"
});

export default instance;