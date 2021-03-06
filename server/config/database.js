import Sequelize from 'sequelize';
import keys from './keys';

export default new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
  host: keys.pgHost,
  dialect: 'postgres',
  "define": {
    "createdAt": "created_at",
    "updatedAt": "updated_at"
  }
});
