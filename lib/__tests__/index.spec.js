const mdLinks = require('../index')

describe("Function mdLinks", () => {
  
  it("is a function", () => expect(typeof mdLinks).toBe("function"));

  it("returns link and text", (done) => {
    return mdLinks('./README.md').then(result => {
      expect(result).toBe(result)
      done()
    });
  });

  it ("return", () => {
  return mdLinks('../READM.md').catch(rejects => 
    expect(rejects).toEqual(rejects))
    
  });
});