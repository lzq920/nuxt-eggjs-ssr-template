"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async list() {
    this.ctx.body = {
      title: "hellow word"
    };
  }
}

module.exports = HomeController;
