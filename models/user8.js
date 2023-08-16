'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user8 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user8.init({
    employeeid: DataTypes.INTEGER,
    employeename: DataTypes.STRING,
    employeeyear: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user8',
  });
  return user8;
};