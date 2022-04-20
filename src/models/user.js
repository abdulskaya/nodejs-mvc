const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}
User.init({
  string: {
    type: Sequelize.STRING
  },
  integer: {
    type: Sequelize.INTEGER
  },
  boolean: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
}, {
  // Other model options 
  sequelize, // pass the connection instance
  modelName: 'User' // choose the model name
});

module.exports = User