const mongo = require('cypress-mongodb')

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
        mongo.configurePlugin(on)
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeigth: 1080,
    env:{
      mongodb: {
        'uri': 'mongodb+srv://qa:cademy@cluster0.eqzgc2b.mongodb.net/QtruckDB?retryWrites=true&w=majority',
        'database': 'QtruckDB',
      }
    }
  },
};
