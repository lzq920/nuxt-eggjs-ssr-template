import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:7001/"
});
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let errorType = {};
    switch (error.response.status) {
      case 401:
        errorType = { status: 401, message: "用户未登录" };
        location.href = "/login?redirect=" + location.pathname;
        break;
      case 500:
        errorType = { status: 500, message: "服务器错误" };
        break;
      case 404:
        errorType = { status: 404, message: "请求地址不存在" };
        break;
      default:
        errorType = {
          status: error.response.status,
          message: error.response.data[0].message
        };
        break;
    }
    return Promise.reject(errorType);
  }
);
export default instance;
