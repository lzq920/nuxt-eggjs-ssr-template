"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({
    size: 10
  });
  router.post("/api/news/create", controller.news.create);
  router.get("/api/news/list", controller.news.list);
};
