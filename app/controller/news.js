"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async create() {
    const params = {
      title: "title one",
      content: "12312312312323"
    };
    const result = await this.ctx.service.news.create(params);
    this.ctx.body = result;
  }
  async list() {
    const result = await this.ctx.service.news.list();
    this.ctx.body = result;
  }
}

module.exports = HomeController;
