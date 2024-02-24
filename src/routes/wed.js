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
  router.post("/users/create-user", homeControllor.handleCreateNewUser);
  router.post("/delete-user/:id", homeControllor.handleDeleteUser);

  return app.use("/", router);
};

export default initWedRoutes;
