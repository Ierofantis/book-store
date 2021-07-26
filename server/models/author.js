
module.exports = (sequelize, Sequelize) => {
  const author = sequelize.define("author", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      unique: true,
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.DATE
    },

  }, {
      underscored: true,
      freezeTableName: true,
    });

  return author;
};
