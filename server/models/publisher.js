
import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const Publisher = sequelize.define('Publisher', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  telephone: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  address: {
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
