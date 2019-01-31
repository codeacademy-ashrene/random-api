const axios = require('axios');

const makeGetRequest = async () => {
  const data = await axios.get('http://gturnquist-quoters.cfapps.io/api/random').then(response => response.data.value.quote);
  return data;
};

module.exports = makeGetRequest;
