"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    let data = this.ctx.request.body;
    if (data) {
      this.ctx.session.token = data.token;
      this.ctx.body = data;
    }
  }
}

module.exports = HomeController;
