import companyApiService from "../service/companyApiService";

const getUserApplyJob = async (req, res) => {
  try {
    if (req.query.id && req.query.page && req.query.limit) {
      let id = req.query.id;
      let page = req.query.page;
      let limit = req.query.limit;
      let statusQuery = req.query.statusQuery;

      let data = await companyApiService.getUserApplyJob(
        id,
        statusQuery,
        +page,
        +limit
      );
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

const rejectRecruitment = async (req, res) => {
  try {
    let data = await companyApiService.rejectRecruitment(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

const acceptRecruitment = async (req, res) => {
  try {
    let data = await companyApiService.acceptRecruitment(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

module.exports = {
  getUserApplyJob,
  rejectRecruitment,
  acceptRecruitment,
};
