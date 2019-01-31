const axios = require('axios');

const getDatafromRandomApi = () => {
  try {
    return axios.get('http://gturnquist-quoters.cfapps.io/api/random').then(response => (response.data));
  } catch (error) {
    console.log(error);
  }
};

const createHandler = async (request, h) => {
  const randomApiData = await getDatafromRandomApi();
  const payloadData = {
    name: request.payload.name,
    email: request.payload.email,
    noOfQuery: request.payload.noOfQuery,
    randomQuery: randomApiData.value.quote,
  };
  return h.response(payloadData);
};


module.exports = { createHandler };
