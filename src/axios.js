/**
 * axios 配置
 */
import axios from "axios";

const config = {
  baseURL:
    "http://localhost:8080/",
  timeout: 2 * 60 * 1000
};

function generateService(config, useInterceptors) {
  const service = axios.create(config);
  useInterceptors(service);
  return service;
}

function useInterceptors(service) {
  service.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  service.interceptors.request.use(
    config => {
      config.headers.ticket = sessionStorage.getItem("ticket")
        ? sessionStorage.getItem("ticket")
        : "123456";
      config.headers.simulate = 1;
      return config;
    },
    err => Promise.reject(err)
  );
  // http response 拦截器
  service.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );
}

export function Service(config) {
  return generateService(config, useInterceptors);
}

const service = Service(config);

export default service;
