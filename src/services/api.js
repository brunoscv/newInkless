import axios from 'axios';

const api = axios.create({
    baseURL: 'https://demo.denarius.digital/api/mobile',
    
});

export default api;