const Routes = require('next-routes');

const { HOME } = require('./urls.js');

module.exports = Routes()
  // Home
  .add({ name: 'Home', pattern: HOME, page: 'Home' })
