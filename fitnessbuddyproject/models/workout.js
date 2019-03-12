'use strict';
module.exports = (sequelize, DataTypes) => {
  const workout = sequelize.define(
    'Workout',
    {
      Exercise: DataTypes.STRING,
      Minutes: DataTypes.STRING,
      CaloriesBurned: DataTypes.STRING      
    },
    {
      timestamps: false
    }
  );
  return workout;
};