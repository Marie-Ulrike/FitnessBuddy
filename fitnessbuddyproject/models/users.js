'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'FBUser',
    {
      FBUserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    
    Email: {
      type: DataTypes.STRING,
      unique: true
    },
    Gender : DataTypes.STRING,
    Age: DataTypes.INTEGER
  },
    {}
  );

  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};