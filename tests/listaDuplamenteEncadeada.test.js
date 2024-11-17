const ListaDuplamenteEncadeada = require('../src/ListaDuplamenteEncadeada');

describe("Lista Duplamente Encadeada - Operações Gerais", () => {
    test("Inserir no final", () => {
        const lista = new ListaDuplamenteEncadeada();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(2);
        expect(lista.buscar(1)).toBe(2);
        expect(lista.tamanhoLista()).toBe(2);
    });

    test("Remover no início", () => {
        const lista = new ListaDuplamenteEncadeada();
        lista.inserirNoInicio(1);
        lista.inserirNoInicio(2);
        expect(lista.removerNoInicio()).toBe(2);
        expect(lista.buscar(0)).toBe(1);
    });

    test("Inserir na posição intermediária", () => {
        const lista = new ListaDuplamenteEncadeada();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(3);
        lista.inserirNaPosicao(2, 1);
        expect(lista.buscar(1)).toBe(2);
        expect(lista.tamanhoLista()).toBe(3);
    });

    test("Remover na posição intermediária", () => {
        const lista = new ListaDuplamenteEncadeada();
        lista.inserirNoFinal(1);
        lista.inserirNoFinal(2);
        lista.inserirNoFinal(3);
        expect(lista.removerNaPosicao(1)).toBe(2);
        expect(lista.buscar(0)).toBe(1);
        expect(lista.buscar(1)).toBe(3);
        expect(lista.tamanhoLista()).toBe(2);
    });

    test("Inserir múltiplos elementos no início e no final", () => {
        const lista = new ListaDuplamenteEncadeada();
        lista.inserirNoInicio(1);
        lista.inserirNoInicio(0);
        lista.inserirNoFinal(2);
        lista.inserirNoFinal(3);
        expect(lista.buscar(0)).toBe(0);
        expect(lista.buscar(3)).toBe(3);
        expect(lista.tamanhoLista()).toBe(4);
    });

});
