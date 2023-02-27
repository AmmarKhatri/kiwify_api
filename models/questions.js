const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quiz',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    answerType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    choices: {
      type: DataTypes.JSON,
      allowNull: true
    },
    correctAnswer: {
      type: DataTypes.JSON,
      allowNull: true
    },
    isMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdOn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedOn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questions',
    schema: 'kiwify',
    timestamps: false,
    indexes: [
      {
        name: "questions_pkey",
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
