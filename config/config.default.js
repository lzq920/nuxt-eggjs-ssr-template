"use strict";
module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1531202651566_2816";
  // add your config here
  config.middleware = ["nuxt"];
  config.security = {
    csrf: false
  };
  return config;
};
