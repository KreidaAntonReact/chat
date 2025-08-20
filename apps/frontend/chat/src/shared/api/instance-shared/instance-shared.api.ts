import axios from 'axios';

export const instanceShared = axios.create({
  baseURL: process.env.API_URL
});
