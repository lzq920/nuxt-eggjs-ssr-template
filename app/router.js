"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.post("/api/login", controller.auth.login);
  router.get("/api/info", auth, controller.auth.info);
};
