
import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const Publisher = sequelize.define('Publisher', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
}, {
    freezeTableName: true,
  });

export default Publisher;
