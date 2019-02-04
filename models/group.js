'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupName: DataTypes.STRING
  }, {});
  Group.associate = function (models) {
    Group.hasMany(models.User, { foreignKey: 'groupId' });
  };
  return Group;
};
