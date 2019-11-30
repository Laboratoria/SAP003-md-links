const mdLinks = require("../index.js")


describe("mdLinks",() => {  
    it("É uma função", () => {
        expect(typeof mdLinks).toEqual("function");
    });
});

test('Retorna todos os links de arquivo .md válido ', (done) => {
    mdLinks('libs/__tests__/test.md')
    .then((response) => {
        expect(response).toEqual([{ href: 'https://google.com', text: 'Texto 1' },
        { href: 'http://developer.mozilla.org/pt-BR', text: 'Texto 2'}]);
        done();
    });
});

test('Retorna erro de arquivo .md inválido ', (done) => {
    mdLinks('')
    .catch((error) => {
        expect(error).toEqual('Erro: arquivo não encontrado');
        done();
    });
});

test('Retorna erro de um arquivo .md válido porém sem links ', (done) => {
    mdLinks('libs/__tests__/testNolinks.md')
    .catch((error) => {
        expect(error).toEqual('Erro: nenhum link encontrado');
        done();
    });
});



