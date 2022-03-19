const chalk = require("chalk");
const fs = require("fs");

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(getLinks(text));
  } catch (error) {
    handleError(error);
  }
}

function handleError(error){
  throw new Error(chalk.red(error.code, 'there is no file in this filepath'));
}

function getLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const result = [];
  let temp;
  
  while((temp = (regex.exec(text))) !== null){
    result.push({[temp[1]]: temp[2]});
  }
  return result;
}

//* Then method
// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.promises.readFile(filePath, encoding)
//   .then((text) => {
//     console.log(chalk.green(text));
//   }).catch((error) => {
//     handleError(error);
//   });
// }



getFile('./files/firstText.md');
