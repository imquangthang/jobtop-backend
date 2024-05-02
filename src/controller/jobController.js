import e from "express";
import jobApiService from "../service/jobApiService";
import multer from "multer";

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      const jobQuery = {
        title: req.query.title,
        address: req.query.address,
        experience: req.query.experience,
        salary: req.query.salary,
      };

      let data = await jobApiService.getJobWithPagination(
        +page,
        +limit,
        jobQuery
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

const createFunc = async (req, res) => {
  try {
    let data = await jobApiService.createNewJob(req.body);
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

const updateFunc = async (req, res) => {
  try {
    let data = await jobApiService.updateJob(req.body);
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
    let data = await jobApiService.deleteJob(req.body.id);
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

const getAddress = async (req, res) => {
  try {
    let data = await jobApiService.getListAddress();
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

const getCareer = async (req, res) => {
  try {
    let data = await jobApiService.getListCareer();
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

const readCompanyJobFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let email = req.query.email;
      console.log("email: " + email);
      const jobQuery = {
        title: req.query.title,
        address: req.query.address,
        experience: req.query.experience,
        salary: req.query.salary,
      };

      let data = await jobApiService.getCompanyJobWithPagination(
        +page,
        +limit,
        email,
        jobQuery
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

const readJobInfo = async (req, res) => {
  try {
    if (req.query.id) {
      let id = req.query.id;

      let data = await jobApiService.getJobInfo(id);
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

const createNewCareer = async (req, res) => {
  try {
    let data = await jobApiService.createNewCareer(req.body);
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

const applyJob = async (req, res) => {
  try {
    if (req.file) {
      let data = await jobApiService.applyJob(req.body, req.file);

      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, // error code
        DT: data.DT, //data
      });
    } else {
      console.log("Not Found File");
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
  createFunc,
  deleteFunc,
  getAddress,
  readCompanyJobFunc,
  readJobInfo,
  getCareer,
  createNewCareer,
  applyJob,
};
