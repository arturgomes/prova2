const Fila = require('../src/Fila');

describe("Fila - Operações Gerais", () => {
    test("Enfileirar um elemento", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        expect(fila.frente()).toBe(1);
        expect(fila.tamanhoFila()).toBe(1);
    });

    test("Enfileirar múltiplos elementos", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        expect(fila.frente()).toBe(1);
        expect(fila.tamanhoFila()).toBe(3);
    });

    test("Desenfileirar até vazio", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.enfileirar(2);
        expect(fila.desenfileirar()).toBe(1);
        expect(fila.desenfileirar()).toBe(2);
        expect(fila.tamanhoFila()).toBe(0);
    });

    test("Enfileirar após esvaziar", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.desenfileirar();
        fila.enfileirar(2);
        expect(fila.frente()).toBe(2);
        expect(fila.tamanhoFila()).toBe(1);
    });

    test("Manter ordem correta após múltiplos enfileiramentos e desenfileiramentos", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        expect(fila.desenfileirar()).toBe(1);
        expect(fila.desenfileirar()).toBe(2);
        fila.enfileirar(4);
        expect(fila.desenfileirar()).toBe(3);
        expect(fila.frente()).toBe(4);
    });

    test("Fila vazia após múltiplos enfileiramentos e desenfileiramentos", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        fila.desenfileirar();
        fila.desenfileirar();
        fila.desenfileirar();
        expect(fila.tamanhoFila()).toBe(0);
        expect(() => fila.frente()).toThrow("A fila está vazia.");
    });

    test("Desenfileirar completamente em ordem correta", () => {
        const fila = new Fila();
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        expect(fila.desenfileirar()).toBe(1);
        expect(fila.desenfileirar()).toBe(2);
        expect(fila.desenfileirar()).toBe(3);
        expect(fila.tamanhoFila()).toBe(0);
    });
});
