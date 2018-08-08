"use strict";

const Controller = require("egg").Controller;

class HospitalController extends Controller {
  async list() {
    let data = this.ctx.request.body;
    let result = await this.service.fetch.post(
      this.config.api.hospital_list,
      "POST",
      data
    );
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.body = result.data;
      this.ctx.status = result.status;
    }
  }
  async detail() {
    let data = this.ctx.request.body;
    let result = await this.service.fetch.post(
      this.config.api.hospital_detail,
      "POST",
      data
    );
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.body = result.data;
      this.ctx.status = result.status;
    }
  }
}

module.exports = HospitalController;
