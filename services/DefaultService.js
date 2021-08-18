/* eslint-disable no-unused-vars */
const Service = require('./Service');

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

/**
* Get User Info by User ID
* Retrieve the information of the user with the matching user ID.
*
* userId Integer Id of an existing user.
* returns User
* */
const getUsersUserId = ({ userUuid }) => new Promise(
  async (resolve, reject) => {
    try {
      user = await User.findOne({ include:["countryOfBirth"], where: { userUuid: userUuid } })
      resolve(Service.successResponse({
        user
      }));
    } catch (e) {
      console.log(e.message)
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
    
  },
);



/**
* Update User Information
* Update the information of an existing user.
*
* userId Integer Id of an existing user.
* body InlineObject  (optional)
* returns User
* */
const putUsersUserId = ({ userUuid, body }) => new Promise(
  async (resolve, reject) => {
    try {
      user = await User.update(
          { ...body },
          { where: { userUuid: userUuid } }
        );
      resolve(Service.successResponse({
        userId,
        user,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create New User
* Create a new user.
*
* body InlineObject1  (optional)
* returns User
* */
const postUser = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      users = await User.create(body)
      resolve(Service.successResponse({
        users,
      }));
    } catch (e) {
      console.log(e)
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);


const getUsers = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      users = await User.findAll({include:["countryOfBirth"]})
      resolve(Service.successResponse({
        users,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getUsersUserId,
  putUsersUserId,
  postUser,
  getUsers
};
