"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async create() {
    console.log(this.ctx.request.body);
    const result = await this.ctx.service.news.create(this.ctx.request.body);
    this.ctx.body = result;
  }
  async list() {
    const result = await this.ctx.service.news.list();
    this.ctx.body = result;
  }
}

module.exports = HomeController;
