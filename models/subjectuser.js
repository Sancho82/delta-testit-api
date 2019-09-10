'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectUser = sequelize.define('SubjectUser', {
    subjectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  SubjectUser.associate = function (models) {
    SubjectUser.belongsTo(models.User, { foreignKey: 'userId' });
    SubjectUser.belongsTo(models.Subject, { foreignKey: 'subjectId' });
  };
  return SubjectUser;
};
