"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Publisher", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      telephone: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Publisher");
  }
};
