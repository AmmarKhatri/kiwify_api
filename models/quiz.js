const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiz', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quiz',
    schema: 'kiwify',
    timestamps: false,
    indexes: [
      {
        name: "quiz_pkey",
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
