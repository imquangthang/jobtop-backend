import companyApiService from "../service/companyApiService";

const getUserApplyJob = async (req, res) => {
  try {
    if (req.query.id) {
      let id = req.query.id;
      console.log(id);

      let data = await companyApiService.getUserApplyJob(id);
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

module.exports = {
  getUserApplyJob,
};
