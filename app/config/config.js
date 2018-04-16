const keys = require('./keys');

const config = {
  clientHost: 'http://localhost:4000',
  api: 'api/v1',

  development: {
    db: keys.mongodb || 'mongodb://127.0.0.1/myapp',
    port: 8000,
  },

  production: {
    db: '',
    port: 8080,
  },
};

module.exports = config;
