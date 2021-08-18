module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("Address", {
      addressId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      line1: {
        type: Sequelize.STRING
      },
      line2: {
        type: Sequelize.STRING
      },
      line3: {
        type: Sequelize.STRING
      },
      countryId: {
        type: Sequelize.BIGINT
      },
      stateId: {
        type: Sequelize.BIGINT
      },
      cityId: {
        type: Sequelize.BIGINT
      },
      postalCode: {
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

      tableName: 'Address'
    }
    );
  
    return Address;
  };