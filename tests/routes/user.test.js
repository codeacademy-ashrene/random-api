const { server } = require('../../server');

const options = {
  url: '/user',
  method: 'POST',
  payload: {
    name: 'Ashrene',
    email: 'ashrene@gmail.com',
    noOfQuotes: 4,
  },
};

describe('create route', () => {
  it('should respond with string name on /POST request', async () => {
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof {});
    expect(response.result.name).toEqual('Ashrene');
  });
  it('should return status code 200 for POST call', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
