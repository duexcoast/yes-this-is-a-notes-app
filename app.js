import chalk from 'chalk';
import getNotes from './notes.js';
console.log(chalk.green.bgRed.bold(getNotes()));
