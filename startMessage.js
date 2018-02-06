const chalk = require('chalk');

const port = 9000;
const msg = `
--------------------------------
Starting Xpress Kit on Port ${ port || 4000 }
--------------------------------
`;

console.log(chalk.green(msg));
