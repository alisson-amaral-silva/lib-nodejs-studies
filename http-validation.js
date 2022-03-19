const fetch = require('node-fetch');

async function statusCheck(urlList) {
  try {
    const statusList = 
    await Promise
    .all(urlList
      .map(async (url) => {
        const res = await fetch(url);
        return res.status;
    }));
  
    return statusList;
  } catch (error) {
    handleError(error);
  }
}

function handleError(error){
  return new Error(error.message);
}

function generateUrlList(list){
  const urlList = 
  list.map(
    item => Object
    .values(item)
    .join());
  return urlList;
}
async function checkUrl(links){
  const urlList = generateUrlList(links);
  const statusList = await statusCheck(urlList);
  const results = links.map((object,index) => ({
    ...object, 
    status: statusList[index]
  }));
  return results;
}

module.exports = checkUrl;
