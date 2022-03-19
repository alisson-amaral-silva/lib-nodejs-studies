const chalk = require("chalk");
const fs = require("fs");

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, handleCallback);
}

function handleCallback(error, text) {
  if(error){
    handleError(error);
  }
  console.log(chalk.green(text));
}

function handleError(error){
  throw new Error(chalk.red(error.code, 'there is no file in this filepath'));
}

getFile('./files/firstText.md');
