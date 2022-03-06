'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class example_migration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  example_migration.init({
    string: DataTypes.STRING,
    integer: DataTypes.INTEGER,
    boolean: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'example_migration',
  });
  return example_migration;
};