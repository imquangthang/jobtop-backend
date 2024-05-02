"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recruitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recruitment.belongsTo(models.JobInfo, { foreignKey: "jobId" });
      Recruitment.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Recruitment.init(
    {
      jobId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      coverletter: DataTypes.TEXT,
      CV: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Recruitment",
    }
  );
  return Recruitment;
};
