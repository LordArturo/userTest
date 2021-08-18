const dbConfig = require("../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DATABASE.DB, dbConfig.DATABASE.USER, dbConfig.DATABASE.PASSWORD, {
  host: dbConfig.DATABASE.HOST,
  dialect: dbConfig.DATABASE.dialect,
  //operatorsAliases: false,

  pool: {
    max: dbConfig.DATABASE.pool.max,
    min: dbConfig.DATABASE.pool.min,
    acquire: dbConfig.DATABASE.pool.acquire,
    idle: dbConfig.DATABASE.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./Users.model.js")(sequelize, Sequelize);
db.DocumentType = require("./DocumentType.model.js")(sequelize, Sequelize);
db.Country = require("./Country.model.js")(sequelize, Sequelize);
db.Address = require("./Address.model.js")(sequelize, Sequelize);
module.exports = db;