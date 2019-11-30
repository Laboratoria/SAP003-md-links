const mdLinks = require('../index')

describe("Function mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Returns link and text", (done) =>{
    mdLinks('../README.md').then(result => {
      expect (result).toBe(result)
      done()
    });
  });
});