const pingRoutes = require('./ping');
const createRoutes = require('./create');

module.exports = [
  ...pingRoutes,
  ...createRoutes,
];
