require("../index.js");

const text = [{ 
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown' 
  },{
    text: 'Node.js', 
    href: 'https://nodejs.org/'
  },{ 
    text: 'md-links', 
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg' 
}];
  
describe("mdLinks", () => {
    it("is a function", () => {
      expect(typeof mdLinks).toBe("function");
    });
  
    it("returns `links`", () => {
      expect(mdLinks("../lib/readme.md", "links")).toEqual(text);
    });
      it("returns `error`", () => {
        expect(mdLinks(result, "links")).toBe(error);
    }); 
});