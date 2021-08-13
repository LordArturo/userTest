module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        type: Sequelize.INTEGER
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        set(value) {
          console.log(value)
          this.setDataValue('birthDate',  value);//Date.parse(value));
        }
      },
      cityOfBirth: {
        type: Sequelize.INTEGER
      },
      countryOfBirth: {
        type: Sequelize.INTEGER
      },
      professionOrOccupation: {
        type: Sequelize.INTEGER
      },
      nationality: {
        type: Sequelize.INTEGER
      },
      homeCity: {
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