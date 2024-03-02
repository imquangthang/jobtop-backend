import db from "../models/index";

const getAllUsers = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (users) {
      return {
        EM: "get data success",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "somthing wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const createNewUser = async (data) => {
  try {
    await db.User.create({});
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = async (data) => {
  try {
    let user = await db.User.findOne({
      where: { id: data.id },
    });

    if (user) {
      // update
    } else {
      // not found user
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    await db.User.delete({
      where: { id: id },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUsers,
  deleteUser,
};
