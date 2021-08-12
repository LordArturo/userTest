/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get User Info by User ID
* Retrieve the information of the user with the matching user ID.
*
* userId Integer Id of an existing user.
* returns User
* */
const getUsersUserId = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
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
* Update User Information
* Update the information of an existing user.
*
* userId Integer Id of an existing user.
* body InlineObject  (optional)
* returns User
* */
const patchUsersUserId = ({ userId, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        body,
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
      resolve(Service.successResponse({
        body,
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
  patchUsersUserId,
  postUser,
};