const { v4: uuidv4 } = require('uuid');
const models = require("./index.js");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userUuid: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cellphone: {
        type: Sequelize.STRING
      },
      documentTypeId: {
        type: Sequelize.INTEGER
      },
      documentNumber: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATEONLY
      },
      cityOfBirthId: {
        type: Sequelize.INTEGER
      },
      countryOfBirthId: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'Country',
          key: 'countryId'
        }
      },
      professionOrOccupationId: {
        type: Sequelize.INTEGER
      },
      nationalityId: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.INTEGER
      },
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,
    }
    );

    User.beforeCreate(async (user, options) => {
      if(user.userUuid == null)
        user.userUuid = uuidv4();
    });

    


    const Country = require("./Country.model.js")(sequelize, Sequelize);
    User.belongsTo(Country, {
      foreignKey: "countryOfBirthId",
      as: "countryOfBirth",
    });
      
    return User;
  };