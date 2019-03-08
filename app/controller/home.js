"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async list() {
    let list = [];
    for (let i = 0; i < 100; i++) {
      list.push({
        name: i
      });
    }
    this.ctx.body = list;
  }
}

module.exports = HomeController;
