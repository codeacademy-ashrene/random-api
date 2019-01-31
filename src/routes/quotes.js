const Joi = require('joi');
const { updateQuotesHandler } = require('../handlers/updateQuotesHandler');

module.exports = [{
  path: '/user',
  method: 'PUT',
  handler: updateQuotesHandler,
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        noOfQuotes: Joi.number().required(),
      },
    },
  },
}];
