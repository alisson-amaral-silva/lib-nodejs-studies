const getFile = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {
  it('should be a function', () => {
    expect(typeof getFile).toBe('function');
  })
  it('should return list with results', async () => {
    const result = await getFile('C:/Users/aalis/Documents/cursos/nodejs/lib-nodejs-studies/test/files/text1.md');
    expect(result).toEqual(arrayResult)
  })
  it('should return message: "There are no links"', async () => {
    const result = await getFile('C:/Users/aalis/Documents/cursos/nodejs/lib-nodejs-studies/test/files/text1_without_links.md');
    expect(result).toBe('There are no links');
  })
  it('should throw error message: "there is no file in this filepath"', () => {
    async function handleError() {
      await getFile('C:/Users/aalis/Documents/cursos/nodejs/lib-nodejs-studies/test/files');
      expect(handleError).toThrowError(/there is no file in this filepath/);
    }
  })
})
