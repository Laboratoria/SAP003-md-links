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

test('Faz a validação de links caso options seja true', (done) => {
    mdLinks('libs/__tests__/test.md', true)
    .then((response) => {
        expect(response).toEqual([{ href: "https://google.com", text: "Texto 1", status: 200 },
        { href: "http://developer.mozilla.org/pt-BR", text: "Texto 2", status: 200 }]);
        done();
    })
})

test('Retorna page not found para links quebrados', (done) => {
    mdLinks('libs/__tests__/testPageNotFound.md', true)
    .then((response) => {
        expect(response).toEqual([
            {href: 'https://ggle.com', text: 'Texto 1', status: 'Page not found'},
            {href: 'http://developer.mozilla.org/pt-BR', text: 'Texto 2', status: 200}
        ]);
        done();
    })
})

