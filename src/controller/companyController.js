import companyApiService from "../service/companyApiService";

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      const companyQuery = {
        title: req.query.title,
        address: req.query.address,
      };

      let data = await companyApiService.getCompanyWithPagination(
        +page,
        +limit,
        companyQuery
      );
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: data.DT, //data
      });
    } else {
      let data = await jobApiService.getAllJobs();
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

const updateFunc = async (req, res) => {
  try {
    let data = await companyApiService.updateCompany(req.body);
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

const deleteFunc = async (req, res) => {
  try {
    let data = await companyApiService.deleteCompany(req.body.id);
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

const readCompanyInfo = async (req, res) => {
  try {
    if (req.query.id) {
      let id = req.query.id;

      let data = await companyApiService.getCompanyInfo(id);
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: "", //data
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

const readCompanyProfile = async (req, res) => {
  try {
    if (req.query.email) {
      let email = req.query.email;

      let data = await companyApiService.getCompanyProfile(email);
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: "", //data
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

module.exports = {
  readFunc,
  updateFunc,
  getUserApplyJob,
  rejectRecruitment,
  acceptRecruitment,
  readCompanyInfo,
  readCompanyProfile,
  deleteFunc,
};
