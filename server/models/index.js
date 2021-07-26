const dbConfig = require("../config/keys");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.pgDatabase, dbConfig.pgUser, dbConfig.pgPassword, {
  host: dbConfig.PGHOST,
  dialect: "postgres",
  port: dbConfig.pgPort,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require("./book.js")(sequelize, Sequelize);
db.author = require("./author.js")(sequelize, Sequelize);
db.publisher = require("./publisher.js")(sequelize, Sequelize);

//authors
db.Book.belongsTo(db.author, {
  foreignKey: "authorId",
  as: "author"
});

//publishers
db.Book.belongsTo(db.publisher, {
  foreignKey: "publisherId",
  as: "publisher"
});

module.exports = db;