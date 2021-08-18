module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("Countries", {
      countryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      iso2: {
        type: Sequelize.STRING
      },
      iso3: {
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

    //Country.hasMany(Users, { as: "users" });
  
    return Country;
  };