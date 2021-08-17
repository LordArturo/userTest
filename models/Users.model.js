const { uuid } = require('uuidv4');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uuid: {
        type: Sequelize.STRING,
        set(value) {
          if(value == null)
            this.setDataValue('uuid',  uuid());
        }
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
        type: Sequelize.DATEONLY,
        //set(value) {
        //  console.log(value)
        //  this.setDataValue('birthDate',  value);//Date.parse(value));
        //}
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
  
    return User;
  };