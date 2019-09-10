'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function (models) {
    Subject.hasMany(models.Question, { foreignKey: 'subjectId' });
  };
  return Subject;
};
