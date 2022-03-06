'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('example_migrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('example_migrations');
  }
};