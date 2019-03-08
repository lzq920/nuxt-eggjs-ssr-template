"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
  async create(data) {
    const result = this.ctx.model.News.create(data);
    return result;
  }
  async list() {
    const result = this.ctx.model.News.find({});
    return result;
  }
}

module.exports = NewsService;
