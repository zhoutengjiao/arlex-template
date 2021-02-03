import axios from "axios";
import setting from "@/settings";

const service = axios.create({
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (setting.mock) {
      if (config.mock) {
        config.url = `${setting.mockPrefix}${config.url}`;
        return config;
      }
    }
    config.baseURL = setting.baseURL;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
