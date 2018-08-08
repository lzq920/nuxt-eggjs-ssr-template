"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/api/login", controller.home.login);
  router.post("/api/logout", controller.home.logout);
  router.post("/api/info", controller.home.info);
  router.post("/api/merchant/hospital/list", controller.merchant.hospital.list);
  router.post(
    "/api/merchant/hospital/detail",
    controller.merchant.hospital.detail
  );
};
