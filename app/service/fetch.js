"use strict";

const Service = require("egg").Service;

class FetchService extends Service {
  async post(url, method, data) {
    let usersession = this.ctx.session.user;
    const result = await this.ctx.curl(this.config.remote + url, {
      method: method,
      dataType: "json",
      data: data,
      beforeRequest: options => {
        if (usersession) {
          options.headers["Token"] = usersession.Token;
        }
      }
    });
    if (this.app.config.env === "local") {
      console.log(
        "========================================调试信息========================================"
      );
      console.log("请求地址:", { url: this.config.remote + url });
      console.log("请求方式:", { method: method });
      console.log("请求参数:", { params: data });
      console.log("请求状态:", { status: result.status });
      console.log("请求结果:", result.data);
      console.log(
        "======================================================================================="
      );
    }
    return {
      data: result.data,
      status: result.status
    };
  }
}

module.exports = FetchService;
