const chalk = require("chalk");
const getFile = require('./index');
const checkUrl = require('./http-validation');

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  if(path[3] === 'check')
    console.log(chalk.yellow('Link checked list'), await checkUrl(result));
  else
  console.log(chalk.yellow('Link list'), result);
}

processText(path);
