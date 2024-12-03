
import axios from 'axios';

const api = axios.create({
   
    baseURL: "https://hairbnbbe-9f629b6e0127.herokuapp.com/api/v1",
    withCredentials: true,

});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);