const Joi = require('joi');
const { createHandler } = require('../handlers/createHandler');

module.exports = [{
  path: '/user',
  method: 'POST',
  handler: createHandler,
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        noOfQuery: Joi.number().required(),
      },
    },
  },
}];
