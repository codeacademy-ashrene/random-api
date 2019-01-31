const pingRoutes = require('./ping');
const userRoutes = require('./user');
const quotesRoutes = require('./quotes');

module.exports = [
  ...pingRoutes,
  ...userRoutes,
  ...quotesRoutes,
];
