const mdLinks = require('../index')    

describe("mdLinks", () => {
  it("is a function", () =>  expect(typeof mdLinks).toBe("function"));

it("returns href and text", (done) => {
   return mdLinks('./README.md').then(result => {
       expect(result).toBe(result)
       done()
   });
});

it("return erro no arquivo", (done) => 
{
    return mdLinks('./READM.md').catch(e => 
      { 
        expect(e).toBe(e);
    done();
      });
});

it("return Nao existe arquivo", (done) => {
  return mdLinks('./README.md').catch(e =>
    {
    expect(e).toBe(e);
    done();
    });  
 });
});