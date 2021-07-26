import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isbn: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  visible: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'author',
      key: 'id'
    },
    validate: {
      notEmpty: false,
    },
  },
  publisherId: {
    type: DataTypes.INTEGER,
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

export default Book;

