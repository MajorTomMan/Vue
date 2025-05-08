import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: 'http://localhost:3000/api',  // 可根据你 mock 地址调整
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(config => {
  // 模拟添加 token
  config.headers.Authorization = `Bearer mock-token`;
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data;
}, error => {
  ElMessage.error(error.response?.data?.message || '请求失败');
  return Promise.reject(error);
});

export default request;