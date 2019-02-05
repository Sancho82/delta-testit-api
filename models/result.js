'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    testId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.ENUM('SENT', 'PENDING', 'CORRECTED')
  }, {});
  Result.associate = function (models) {
    Result.belongsTo(models.Test, { foreignKey: 'testId' });
    Result.belongsTo(models.User, { foreignKey: 'userId' });
    Result.hasMany(models.ChoosenAnswer, { foreignKey: 'resultId' });
  };
  return Result;
};
