require("dotenv").config();
import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import { getGroupWithRoles } from "../service/JWTService";
import { createJWT } from "../middleware/JWTAction";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail },
  });

  if (user) {
    return true;
  }

  return false;
};

const checkCompanyNameExist = async (companyName) => {
  let user = await db.Company.findOne({
    where: { name: companyName },
  });

  if (user) {
    return true;
  }

  return false;
};

const checkPhoneExist = async (userPhone) => {
  let user = await db.User.findOne({
    where: { phone: userPhone },
  });

  if (user) {
    return true;
  }

  return false;
};

const registerNewUser = async (rawUserData) => {
  try {
    // check email/phonenumber are exist
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email is a already exist",
        EC: 1,
      };
    }
    let isPhoneExist = await checkPhoneExist(rawUserData.phone);
    if (isPhoneExist === true) {
      return {
        EM: "The phone number is a already exist",
        EC: 2,
      };
    }
    // hash user password
    let hashPassword = hashUserPassword(rawUserData.password);
    // get id group Guest
    let group = await db.Group.findOne({
      attributes: ["id"],
      where: { name: "Guest" },
    });

    console.log("group registerL:");
    console.log(group);

    // create new user
    await db.User.create({
      firstName: rawUserData.firstName,
      lastName: rawUserData.lastName,
      email: rawUserData.email,
      username: rawUserData.username,
      password: hashPassword,
      phone: rawUserData.phone,
      groupId: group.id,
    });

    return {
      EM: "A user is a created successfully!",
      EC: 0,
    };
  } catch (error) {
    console.log(">> check error: ", error);
    return {
      EM: "Something wrongs in service....",
      EC: -2,
    };
  }
};

const registerNewCompany = async (rawUserData) => {
  try {
    // check email/phonenumber are exist
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email is a already exist",
        EC: 1,
      };
    }
    let isPhoneExist = await checkPhoneExist(rawUserData.phone);
    if (isPhoneExist === true) {
      return {
        EM: "The phone number is a already exist",
        EC: 2,
      };
    }

    let isCompanyNameExist = await checkCompanyNameExist(rawUserData.companyName);
    if (isCompanyNameExist === true) {
      return {
        EM: "The company name is a already exist",
        EC: 2,
      };
    }
    // hash user password
    let hashPassword = hashUserPassword(rawUserData.password);
    // get id group Guest
    let group = await db.Group.findOne({
      attributes: ["id"],
      where: { name: "Customer" },
    });

    console.log("group registerL:");
    console.log(group);

    // create new company
    let data = await db.User.create({
      email: rawUserData.email,
      username: rawUserData.companyName,
      password: hashPassword,
      phone: rawUserData.phone,
      groupId: group.id,
    });

    await db.Company.create({
      idAccount: data.id,
      name: rawUserData.companyName,
    });

    return {
      EM: "A company is a created successfully!",
      EC: 0,
    };
  } catch (error) {
    console.log(">> check error: ", error);
    return {
      EM: "Something wrongs in service....",
      EC: -2,
    };
  }
};

const checkPassword = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword); //true or false
};

const handleUserLogin = async (rawData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }],
      },
    });

    if (user) {
      let isCorrectPassword = await checkPassword(
        rawData.password,
        user.password
      );

      if (isCorrectPassword === true) {
        let groupWithRoles = await getGroupWithRoles(user);
        let payload = {
          id: user.id,
          email: user.email,
          groupWithRoles,
          username: user.username,
        };
        let token = createJWT(payload);
        return {
          EM: "ok!",
          EC: 0,
          DT: {
            id: user.id,
            access_token: token,
            groupWithRoles,
            email: user.email,
            username: user.username,
          },
        };
      }
    }

    return {
      EM: "Your email/phone or password is incorrect",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    console.log(">> check error: ", error);
    return {
      EM: "Something wrongs in service....",
      EC: -2,
    };
  }
};

module.exports = {
  registerNewUser,
  handleUserLogin,
  hashUserPassword,
  checkEmailExist,
  checkPhoneExist,
  registerNewCompany,
  checkCompanyNameExist,
};
