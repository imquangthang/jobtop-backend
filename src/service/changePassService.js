import db from "../models/index";
import { hashUserPassword } from "./loginRegisterService";
const changePass = async (data) => {
  try {
    let password =
      data.newPass && data.confPass && data.newPass === data.confPass
        ? data.newPass
        : "";
    if (password === "") {
      return {
        EM: "New Password and Confirm Password not same!!!",
        EC: 1,
        DT: "",
      };
    }
    if (!data.email) {
      return {
        EM: "Error with empty email",
        EC: 2,
        DT: "",
      };
    }

    let user = await db.User.findOne({
      where: { email: data.email },
    });
    if (user) {
      // hash password
      let hashPassword = hashUserPassword(password);
      // update
      await user.update({
        password: hashPassword,
      });
      return {
        EM: "Change Password Success",
        EC: 0,
        DT: "",
      };
    } else {
      // not found user
      return {
        EM: "User not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

module.exports = { changePass };
