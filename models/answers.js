const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answers', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attemptId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attempts',
        key: 'id'
      }
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.JSON,
      allowNull: true
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'answers',
    schema: 'kiwify',
    timestamps: false,
    indexes: [
      {
        name: "answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  },{
    freezeTableName: true
  });
};
