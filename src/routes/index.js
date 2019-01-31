const pingRoutes = require('./ping');
const userRoutes = require('./user');

module.exports = [
  ...pingRoutes,
  ...userRoutes,
];
