const arrayToJSON = require('../utils/arrayToJSON');
const makeGetRequest = require('../utils/makeGetRequest');
const model = require('../../models');

const getQuotes = async (noOfQuotes) => {
  const quotes = [];
  try {
    for (let i = 0; i < noOfQuotes; i += 1) {
      quotes[i] = makeGetRequest();
    }
    const quotesCollection = await Promise.all(quotes);
    const JSONQuotes = arrayToJSON(quotesCollection);
    return JSONQuotes;
  } catch (error) {
    console.log(error);
  }
};

const userHandler = async (request, h) => {
  const quotes = await getQuotes(request.payload.noOfQuotes);
  // const payloadData = {
  //   name: request.payload.name,
  //   email: request.payload.email,
  //   noOfQuotes: request.payload.noOfQuotes,
  //   Quotes: quotes,
  // };
  return await model.User.generateUserData(request.payload.name, request.payload.email, request.payload.noOfQuotes, quotes);
  // return h.response(payloadData);
};


module.exports = { userHandler };
