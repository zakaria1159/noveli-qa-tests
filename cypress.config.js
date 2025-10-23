const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://noveli.app',
    
    setupNodeEvents(on, config) {
      // Register the code coverage plugin
      require('@cypress/code-coverage/task')(on, config);
      
      // Optional: Add coverage task for logs
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        coverage(coverage) {
          console.log('Coverage collected:', coverage);
          return null;
        }
      });
      
      return config;
    },
    
    // Coverage-related settings
    env: {
      codeCoverage: {
        url: '/api/__coverage__',  // Where instrumented code sends coverage data
        exclude: [
          'cypress/**/*.*',
          '**/*.spec.js',
          '**/*.test.js'
        ]
      }
    }
  }
});