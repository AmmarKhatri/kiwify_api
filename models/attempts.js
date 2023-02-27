const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attempts', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quiz',
        key: 'id'
      }
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    outof: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdOn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    completedOn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attempts',
    schema: 'kiwify',
    timestamps: false,
    indexes: [
      {
        name: "attempts_pkey",
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
