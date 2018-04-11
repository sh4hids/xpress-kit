const chalk = require('chalk');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const msg = `
--------------------------------
Starting Xpress Kit on Port ${config.port}
--------------------------------
`;

console.log(chalk.green(msg));
