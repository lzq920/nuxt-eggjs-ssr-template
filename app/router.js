"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/api/news/create", controller.news.create);
  router.get("/api/news/list", controller.news.list);
};
