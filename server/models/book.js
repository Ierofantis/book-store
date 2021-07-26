module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
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
      defaultValue: false,
      validate: {
        notEmpty: true,
      },
    },
    authorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'author',
        key: 'id'
      },
      validate: {
        notEmpty: false,
      },
    },
    publisherId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'publisher',
        key: 'id'
      },
      validate: {
        notEmpty: false,
      },
    }
  }, {
      freezeTableName: true,
    });

  return Book;
};
