import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  let hashPass = hashUserPassword(password);

  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO user (email, password, username) VALUES (?,?,?)",
      [email, hashPass, username]
    );
  } catch (error) {
    console.log(">> check error: ", error);
  }
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("Select * from user");
    return rows;
  } catch (error) {
    console.log(">>> check error: ", error);
  }
};

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM user WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(">>> check error: ", error);
  }
};

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM user WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(">>> check error: ", error);
  }
};

const updateUserInfor = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "UPDATE user SET email = ?, username = ? WHERE id = ?",
      [email, username, id]
    );
    return rows;
  } catch (error) {
    console.log(">>> check error: ", error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
