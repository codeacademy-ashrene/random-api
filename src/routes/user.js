const Joi = require('joi');
const { userHandler } = require('../handlers/userHandler');

module.exports = [{
  path: '/user',
  method: 'POST',
  handler: userHandler,
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        noOfQuotes: Joi.number().required(),
      },
    },
  },
}];
