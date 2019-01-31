const createHandler = (request, h) => h.response(request.payload);

module.exports = { createHandler };
