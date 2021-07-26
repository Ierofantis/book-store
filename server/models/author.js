
import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const Author = sequelize.define('Author', {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    unique: true,
    type: DataTypes.STRING
  },
  birth: {
    type: DataTypes.DATE
  },

}, {
    freezeTableName: true,
  });

export default Author;

