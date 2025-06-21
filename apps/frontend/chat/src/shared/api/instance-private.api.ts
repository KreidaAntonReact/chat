import axios from 'axios';

export const instancePrivate = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
});
