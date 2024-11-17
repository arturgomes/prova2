const Lista = require('../src/Lista');

describe("Lista - Operações Gerais", () => {
    test("Inserir no final", () => {
        const lista = new Lista();
        lista.inserirNoFinal(1);
        expect(lista.buscar(0)).toBe(1);
        expect(lista.tamanhoLista()).toBe(1);
    });

    test("Inserir na posição intermediária", () => {
        const lista = new Lista();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(3);
        lista.inserirNaPosicao(2, 1);
        expect(lista.buscar(1)).toBe(2);
        expect(lista.tamanhoLista()).toBe(3);
    });

    test("Remover no início", () => {
        const lista = new Lista();
        lista.inserirNoInicio(1);
        lista.inserirNoInicio(2);
        expect(lista.removerNoInicio()).toBe(2);
        expect(lista.tamanhoLista()).toBe(1);
    });

    test("Remover no final", () => {
        const lista = new Lista();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(2);
        expect(lista.removerNoFinal()).toBe(2);
        expect(lista.tamanhoLista()).toBe(1);
    });

    test("Inserir múltiplos elementos no início e no final", () => {
        const lista = new Lista();
        lista.inserirNoInicio(1);
        lista.inserirNoFinal(2);
        lista.inserirNoFinal(3);
        lista.inserirNoInicio(0);
        expect(lista.buscar(0)).toBe(0);
        expect(lista.buscar(1)).toBe(1);
        expect(lista.buscar(3)).toBe(3);
        expect(lista.tamanhoLista()).toBe(4);
    });

    test("Remover na posição intermediária", () => {
        const lista = new Lista();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(2);
        lista.inserirNoFinal(3);
        expect(lista.removerNaPosicao(1)).toBe(2);
        expect(lista.buscar(0)).toBe(1);
        expect(lista.buscar(1)).toBe(3);
        expect(lista.tamanhoLista()).toBe(2);
    });

    test("Remover por valor inexistente", () => {
        const lista = new Lista();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(2);
        expect(() => lista.removerPorValor(3)).toThrow("Valor não encontrado.");
    });

});
