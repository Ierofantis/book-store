"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Book", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            title: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            isbn: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            visible: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            authorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Author',
                    key: 'id'
                },
            },
            publisherId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Publisher',
                    key: 'id'
                },
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
                freezeTableName: true,
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Book");
    }
};
