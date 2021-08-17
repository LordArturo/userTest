const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
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
        type: Sequelize.INTEGER
      },
      professionOrOccupationId: {
        type: Sequelize.INTEGER
      },
      nationalityId: {
        type: Sequelize.INTEGER
      },
      homeCityId: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
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
      if(user.uuid == null)
        user.uuid = uuidv4();
    });
  
    return User;
  };