const mdLinks = require('../index')

describe("Function mdLinks", () => {
  
  it("is a function", () => expect(typeof mdLinks).toBe("function"));

  it("returns link and text", () => {
    return mdLinks('../README.md').then(result => {
      expect(result).toBe(result)
    });
  });

  // it('returns error', () => {
  //   expect.assertions(1);
  //   return mdLinks('../READ.md').catch(e => expect(e).toMatch('error'));
  // });   

  // test('the data is peanut butter', () => {
  //   return expect(mdLinks()).resolves.toBe("ENOENT: no such file or directory, open 'READM.md'");
  // });

  // test('the fetch fails with an error', () => {
  //   return expect(mdLinks()).rejects.toMatch('error');
  // });
  
// it ("return", () => {
//     return mdLinks ('./READM.md').catch(e => expect(e).toEqual(e))
// })
});