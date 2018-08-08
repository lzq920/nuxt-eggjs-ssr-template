import axios from "axios";
const instance = axios.create();
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
        location.replace("/login?redirect=" + location.pathname);
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
