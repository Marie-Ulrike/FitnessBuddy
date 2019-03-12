'use strict';
module.exports = (sequelize, DataTypes) => {
  const fooditems = sequelize.define(
    'FoodItems',
    {
      FoodName: DataTypes.STRING,
      ServingSize: DataTypes.STRING,
      Carbs: DataTypes.STRING,
      Fats: DataTypes.STRING,
      Protein: DataTypes.STRING,
      Calories: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return fooditems;
};