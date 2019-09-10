'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    questionId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN,
    picture: DataTypes.STRING
  }, {});
  Answer.associate = function (models) {
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
    Answer.hasMany(models.ChoosenAnswer, { foreignKey: 'answerId' });
    // Answer.hasMany(models.ChoosenAnswer, { foreignKey: 'answerId', onDelete: 'cascade', hooks: true });
  };
  return Answer;
};
