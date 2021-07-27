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
                type: Sequelize.BIGINT,
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
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
                timestamps: false,
                freezeTableName: true,
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Book");
    }
};
