import axios from 'axios';

import { globalRouter } from '@/shared/util';

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';


const instancePrivate = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
});

const onRequest = (config: InternalAxiosRequestConfig<unknown>):InternalAxiosRequestConfig<unknown> => config;
const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if(error.response?.status === 401) {
    globalRouter.navigate?.('/sign-in');
  }

  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export const instancePrivateWithInterceptors = setupInterceptorsTo(instancePrivate);


