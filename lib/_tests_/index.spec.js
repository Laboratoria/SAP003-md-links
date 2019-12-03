require("../lib/cli.js");

const finalResult = [{ text: 'Node.js', href: 'https://nodejs.org/pt-br/' },
{ text: 'Chrome', href: 'https://developers.google.com/v8/' },
{ text: 'fs', href: 'https://nodejs.org/api/fs.html' }]

describe("mdLinks", () => {
    it("is a function", () => {
      expect(typeof app.mdLinks).toBe("function");
    });
  
    it("returns `links`", () => {
      expect(app.mdLinks(finalResult, "links")).toEqual([{ text: 'Node.js', href: 'https://nodejs.org/pt-br/' },
      { text: 'Chrome', href: 'https://developers.google.com/v8/' },
      { text: 'fs', href: 'https://nodejs.org/api/fs.html' }]);
    });
  });