import db from "../models/index";

const getAllJobs = async () => {
  try {
    let jobs = await db.JobInfo.findAll({
      attributes: [
        "id",
        "title",
        "address",
        "description",
        "salary",
        "sourcePicture",
      ],
      //   include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (jobs) {
      return {
        EM: "get data success",
        EC: 0,
        DT: jobs,
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
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const getJobWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.JobInfo.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "address",
        "description",
        "salary",
        "sourcePicture",
      ],
      //   include: { model: db.career, attributes: ["name", "description", "id"] },
      order: [["id", "DESC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      jobs: rows,
    };
    console.log(data);
    return {
      EM: "FETCH Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getJobWithPagination,
  getAllJobs,
};
