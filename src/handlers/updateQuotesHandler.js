const model = require('../../models');

const updateQuotesHandler = async (request, h) => {
  const user =  await model.User.updateQuotes(request.payload.name, request.payload.noOfQuotes);
  return user;
};

module.exports = { updateQuotesHandler };
