const { defineConfig } = require('cypress');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

const mongo = require('cypress-mongodb')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        mongo.configurePlugin(on);
        config = cypressBrowserPermissionsPlugin(on,config)
        return config
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeigth: 1080,
    env:{
      browserPermissions:{
        notification: 'allow',
        geolocation: 'allow'
    },
    mongodb: {
      'uri': 'mongodb+srv://qa:cademy@cluster0.eqzgc2b.mongodb.net/QtruckDB?retryWrites=true&w=majority',
      'database': 'QtruckDB',
    }
  }
  },
});