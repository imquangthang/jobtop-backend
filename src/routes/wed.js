import express from "express";
import homeControllor from "../controller/homeController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWedRoutes = (app) => {
  router.get("/", homeControllor.handleHelloWorld);
  router.get("/user", homeControllor.handleUserPage);

  return app.use("/", router);
};

export default initWedRoutes;
