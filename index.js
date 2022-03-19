const chalk = require("chalk");
const fs = require("fs");

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, handleCallback);
}

function handleCallback(_, text) {
  console.log(chalk.green(text));
}

getFile('./files/firstText.md');
