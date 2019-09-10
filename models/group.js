'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  Group.associate = function (models) {
    Group.hasMany(models.User, { foreignKey: 'groupId' });
  };
  return Group;
};
