"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  const subRouter = app.router.namespace("/api");
  subRouter.post("/home/info", app.controller.home.info);
  subRouter.post("/home/login", app.controller.home.login);
  subRouter.post("/home/logout", app.controller.home.logout);
  subRouter.post(
    "/merchant/hospital/list",
    app.controller.merchant.hospital.list
  );
  subRouter.post(
    "/merchant/hospital/detail",
    app.controller.merchant.hospital.detail
  );
  // subRouter.get("sub_upload", "/upload", app.controller.sub.upload);
};
