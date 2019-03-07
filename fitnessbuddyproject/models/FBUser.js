'use strict';
module.exports = (sequelize, DataTypes) => {
  const fbuser = sequelize.define(
    'FBUser',
    {
      FBUserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
     FirstName: DataTypes.STRING,
     LastName: DataTypes. STRING,
     Password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      timestamps: false
    }
  );

  fbuser.associate = function(models) {
    // associations can be defined here
  };
  return fbuser;
};