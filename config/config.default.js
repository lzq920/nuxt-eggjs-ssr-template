"use strict";
const api = require("./api");
module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1531202651566_2816";

  // add your config here
  config.middleware = ["nuxt"];
  config.security = {
    csrf: false
  };
  config.remote = "https://cloud.dev.100cbc.com";
  config.api = api;
  return config;
};
