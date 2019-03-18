"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    let params = this.ctx.request.body;
    this.ctx.session.user = params.username;
    this.ctx.body = {
      message: "登录成功"
    };
  }
  async info() {
    this.ctx.body = this.ctx.session;
  }
}

module.exports = HomeController;
