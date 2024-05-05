import db from "../models/index";
import { sendEmailService } from "./emailService";

const getUserApplyJob = async (idJob, statusQuery, page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let whereCondition = {};
    whereCondition.jobId = idJob;
    if (statusQuery) {
      whereCondition.status = statusQuery;
    }
    const { count, rows } = await db.Recruitment.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "status", "coverletter", "CV"],
      include: {
        model: db.User,
        attributes: ["username", "email", "phone", "sex"],
      },
      where: whereCondition,
    });

    let totalPages = Math.ceil(count / limit);
    let jobRecruitment = {
      totalRows: count,
      totalPages: totalPages,
      recruitments: rows,
    };
    if (jobRecruitment) {
      return {
        EM: "get data success",
        EC: 0,
        DT: jobRecruitment,
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

const rejectRecruitment = async (data) => {
  try {
    let info = await getInfoSendEmail(data.idRecruitment);

    let sendEmail = await sendEmailService(
      data.action,
      info.email,
      info.company,
      info.job,
      null,
      null,
      null
    );
    if (sendEmail) {
      let reject = await db.Recruitment.update(
        { status: 2 },
        {
          where: {
            id: data.idRecruitment,
          },
        }
      );
      if (reject) {
        return {
          EM: "reject success",
          EC: 0,
          DT: reject,
        };
      } else {
        return {
          EM: "reject unsuccess",
          EC: 0,
          DT: [],
        };
      }
    } else {
      return {
        EM: "send email unsuccess",
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

const getInfoSendEmail = async (idRecruitment) => {
  try {
    let tmp = await db.Recruitment.findOne({
      attributes: ["userId", "jobId"],
      where: {
        id: idRecruitment,
      },
    });

    if (!tmp) {
      // Handle case where recruitment data not found
      throw new Error(`Recruitment with ID ${idRecruitment} not found`);
    }

    let dataJob = await db.JobInfo.findOne({
      attributes: ["title"],
      include: { model: db.Company, attributes: ["name"] },
      where: {
        id: tmp.jobId,
      },
    });
    if (!dataJob) {
      // Handle case where job data not found
      throw new Error(`Job with ID ${tmp.jobId} not found`);
    }

    let dataUser = await db.User.findOne({
      attributes: ["email"],
      where: {
        id: tmp.userId,
      },
    });
    if (!dataUser) {
      // Handle case where user data not found
      throw new Error(`User with ID ${tmp.userId} not found`);
    }

    let data = {
      email: dataUser.email,
      company: dataJob.Company.name,
      job: dataJob.title,
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

const acceptRecruitment = async (data) => {
  try {
    let info = await getInfoSendEmail(data.idRecruitment);

    let sendEmail = await sendEmailService(
      data.action,
      info.email,
      info.company,
      info.job,
      data.dayInterview,
      data.timeInterview,
      data.address
    );

    if (sendEmail) {
      let accept = await db.Recruitment.update(
        { status: 1 },
        {
          where: {
            id: data.idRecruitment,
          },
        }
      );
      if (accept) {
        return {
          EM: "accept success",
          EC: 0,
          DT: accept,
        };
      } else {
        return {
          EM: "accept unsuccess",
          EC: 0,
          DT: [],
        };
      }
    } else {
      return {
        EM: "send email unsuccess",
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

module.exports = {
  getUserApplyJob,
  rejectRecruitment,
  acceptRecruitment,
};
