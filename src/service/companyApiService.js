import db from "../models/index";

const getUserApplyJob = async (idJob) => {
  try {
    let jobRecruitment = await db.Recruitment.findAll({
      attributes: ["status", "coverletter", "CV"],
      include: {
        model: db.User,
        attributes: ["username", "email", "phone", "sex"],
      },
      where: { jobId: idJob },
    });
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

module.exports = {
  getUserApplyJob,
};
