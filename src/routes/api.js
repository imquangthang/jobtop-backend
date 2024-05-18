import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
import jobController from "../controller/jobController";
import companyController from "../controller/companyController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";
import multer from "multer";
import { sendEmailController } from "../controller/emailController.js";

const router = express.Router();

// Khởi tạo Multer với các tùy chọn cấu hình
const upload = multer({ dest: "uploads/" }); // Thư mục để lưu trữ các tệp tải lên

/**
 *
 * @param {*} app : express app
 */

const testMiddleware = (req, res, next) => {
  console.log("calling a middleware");
  if (true) {
    return res.send("reject middleware");
  }
  next();
};

const initApiRoutes = (app) => {
  // path, handle
  // rest API
  // GET - R, POST - C, PUT - U, DELETE - D

  router.all(/^\/(?!job).*/, checkUserJWT, checkUserPermission);

  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);

  
  // user routes
  router.get("/account", userController.getUserAccount);
  router.get("/user/read", userController.readFunc);
  router.get("/user/read-info-user", userController.getUserByEmail);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);
  router.put("/user/update-info-user", userController.updateUser);
  router.get("/user/read/job-recruitment", userController.getJobRecruitment);

  // roles routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
  router.post("/role/assign-to-group", roleController.assignRoleToGroup);

  // group routes
  router.get("/group/read", groupController.readFunc);

  // job routers
  router.get("/job/read", jobController.readFunc);
  router.post("/job/create", jobController.createFunc);
  router.put("/job/update", jobController.updateFunc);
  router.delete("/job/delete", jobController.deleteFunc);
  router.get("/job/read/getAddress", jobController.getAddress);
  router.get("/job/read/getCareer", jobController.getCareer);
  router.get("/job/read/company-job", jobController.readCompanyJobFunc);
  router.get("/job/read/job-info", jobController.readJobInfo);
  router.post("/job/create/create-new-career", jobController.createNewCareer);
  router.post(
    "/job/apply-job",
    upload.single("fileCV"),
    jobController.applyJob
  );

  // Company Routers
  router.get(
    "/company/read/job-info-status",
    companyController.getUserApplyJob
  );
  router.put(
    "/company/update/reject-recruitment",
    companyController.rejectRecruitment
  );
  router.put(
    "/company/update/accept-recruitment",
    companyController.acceptRecruitment
  );

  //email router
  router.post("/sendEmail", sendEmailController);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
