import { groupBy } from "lodash";
import db, { Sequelize, sequelize } from "../models/index";
import { file } from "googleapis/build/src/apis/file";
const { Op, literal, where } = require("sequelize");
import { uploadFile } from "./fileApi";

const getAllJobs = async () => {
  try {
    let jobs = await db.JobInfo.findAll({
      attributes: [
        "id",
        "title",
        "companyId",
        "careerId",
        "address",
        "numberEmployee",
        "level",
        "salary",
        "description",
        "requirements",
        "deadline",
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

const getJobWithPagination = async (page, limit, jobQuery) => {
  try {
    let offset = (page - 1) * limit;
    //check điều kiện order
    let orderCondition = [["id", "DESC"]]; // Mặc định sắp xếp theo id DESC
    // Thêm điều kiện sắp xếp theo salary nếu tồn tại và không rỗng
    if (jobQuery.salary === "ASC" || jobQuery.salary === "DESC") {
      orderCondition.unshift([
        literal("CAST(SUBSTRING_INDEX(salary, ' -', 1) AS UNSIGNED)"),
        jobQuery.salary,
      ]);
    }

    // check điều kiện để truy vấn where
    let whereCondition = {};
    if (jobQuery.title)
      whereCondition.title = { [Op.like]: `%${jobQuery.title}%` };
    if (jobQuery.address)
      whereCondition.address = { [Op.like]: `%${jobQuery.address}%` };
    if (jobQuery.experience)
      whereCondition.level = { [Op.like]: `%${jobQuery.experience}%` };
    const { count, rows } = await db.JobInfo.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "companyId",
        "careerId",
        "address",
        "numberEmployee",
        "level",
        "salary",
        "description",
        "requirements",
        "rights",
        "dateSub",
        "deadline",
        "sourcePicture",
      ],
      include: { model: db.Company, attributes: ["name", "id"] },
      order: orderCondition,
      where: whereCondition,
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

const getCompanyJobWithPagination = async (page, limit, emailAcc, jobQuery) => {
  try {
    let offset = (page - 1) * limit;
    //check điều kiện order
    let orderCondition = [["id", "DESC"]]; // Mặc định sắp xếp theo id DESC
    // Thêm điều kiện sắp xếp theo salary nếu tồn tại và không rỗng
    if (jobQuery.salary === "ASC" || jobQuery.salary === "DESC") {
      orderCondition.unshift([
        literal("CAST(SUBSTRING_INDEX(salary, ' -', 1) AS UNSIGNED)"),
        jobQuery.salary,
      ]);
    }

    //lấy id account company từ email
    let idAcc = await db.User.findOne({
      attributes: ["id"],
      where: { email: emailAcc },
    });
    // lấy id company từ id account company
    let idComp = await db.Company.findOne({
      attributes: ["id"],
      where: { idAccount: idAcc.id },
    });

    // check điều kiện để truy vấn where
    let whereCondition = {};
    whereCondition.companyId = idComp.id;
    if (jobQuery.title)
      whereCondition.title = { [Op.like]: `%${jobQuery.title}%` };
    if (jobQuery.address)
      whereCondition.address = { [Op.like]: `%${jobQuery.address}%` };
    if (jobQuery.experience)
      whereCondition.level = { [Op.like]: `%${jobQuery.experience}%` };
    const { count, rows } = await db.JobInfo.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "companyId",
        "careerId",
        "address",
        "numberEmployee",
        "level",
        "salary",
        "description",
        "requirements",
        "rights",
        "dateSub",
        "deadline",
        "sourcePicture",
      ],
      include: { model: db.Company, attributes: ["name", "id"] },
      order: orderCondition,
      where: whereCondition,
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

const createNewJob = async (data) => {
  try {
    // create new job
    await db.JobInfo.create(data);
    return {
      EM: "CREATE Job Success",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

const updateJob = async (data) => {
  try {
    if (!data.id) {
      return {
        EM: "Error with empty Job",
        EC: 1,
        DT: "",
      };
    }
    let job = await db.JobInfo.findOne({
      where: { id: data.id },
    });

    if (job) {
      // update
      await job.update({
        title: data.title,
        companyId: data.companyId,
        careerId: data.careerId,
        address: data.address,
        numberEmployee: data.numberEmployee,
        level: data.level,
        salary: data.salary,
        description: data.description,
        requirements: data.requirements,
        rights: data.rights,
        deadline: data.deadline,
        sourcePicture: data.sourcePicture,
      });
      return {
        EM: "Update Job Success",
        EC: 0,
        DT: "",
      };
    } else {
      // not found user
      return {
        EM: "Job not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

const deleteJob = async (id) => {
  try {
    let job = await db.JobInfo.findOne({
      where: { id: id },
    });
    if (job) {
      await job.destroy();

      return {
        EM: "DELETE job success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "job not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "error from service",
      EC: 1,
      DT: [],
    };
  }
};

const getListAddress = async () => {
  try {
    // Define the query
    const query = `
              SELECT DISTINCT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(address, ',', n.digit+1), ',', -1)) AS address
              FROM jobinfo
              JOIN (
              SELECT 0 AS digit UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3
              ) AS n ON LENGTH(address) - LENGTH(REPLACE(address, ',', '')) >= n.digit
              ORDER BY address;
              `;

    // let address = await db.JobInfo.findAll({});
    let address = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT,
    });

    if (address) {
      return {
        EM: "get data success",
        EC: 0,
        DT: address,
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

const getListCareer = async () => {
  try {
    let careers = await db.Career.findAll({
      attributes: ["id", "name"],
    });
    if (careers) {
      return {
        EM: "get data careers success",
        EC: 0,
        DT: careers,
      };
    } else {
      return {
        EM: "get data careers unsuccess",
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

const getJobInfo = async (idJob) => {
  try {
    let job = await db.JobInfo.findOne({
      attributes: [
        "id",
        "title",
        "companyId",
        "careerId",
        "address",
        "numberEmployee",
        "level",
        "salary",
        "description",
        "requirements",
        "rights",
        "dateSub",
        "deadline",
        "sourcePicture",
      ],
      include: { model: db.Company, attributes: ["name", "id"] },
      where: { id: idJob },
    });
    if (job) {
      return {
        EM: "get data success",
        EC: 0,
        DT: job,
      };
    } else {
      return {
        EM: "get data unsuccess",
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

const checkCareerExits = async (careerName) => {
  let data = await db.Career.findOne({
    where: { name: careerName },
  });
  if (data != null) {
    return true;
  }

  return false;
};

const createNewCareer = async (data) => {
  try {
    // create new career
    let careerExit = await checkCareerExits(data.name);
    if (!careerExit) {
      let dataNew = await db.Career.create(data);
      return {
        EM: "CREATE Career Success",
        EC: 0,
        DT: dataNew,
      };
    } else {
      return {
        EM: "Career is exits",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

const checkApplyExits = async (user_Id, job_Id) => {
  let data = await db.Recruitment.findOne({
    where: { jobId: job_Id, userId: user_Id },
  });
  if (data != null) {
    return true;
  }

  return false;
};

const applyJob = async (data, file) => {
  try {
    // apply job
    let user = await db.User.findOne({
      attributes: ["id"],
      where: { email: data.accountEmail },
    });
    let applyExit = await checkApplyExits(user.id, data.jobId);
    if (!applyExit) {
      let fileId = await uploadFile(
        { shared: true },
        file.originalname,
        file.mimetype,
        file.path
      );
      let URL_CV = "https://drive.google.com/file/d/" + fileId + "/preview";
      let dataApply = {
        userId: user.id,
        jobId: data.jobId,
        status: 0,
        coverletter: data.coverletter,
        CV: URL_CV,
      };
      let dataNew = await db.Recruitment.create(dataApply);
      return {
        EM: "Apply this job Success",
        EC: 0,
        DT: dataNew,
      };
    } else {
      return {
        EM: "You have applied for this job",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

module.exports = {
  getJobWithPagination,
  getCompanyJobWithPagination,
  getAllJobs,
  createNewJob,
  updateJob,
  deleteJob,
  getListAddress,
  getJobInfo,
  getListCareer,
  createNewCareer,
  applyJob,
};
