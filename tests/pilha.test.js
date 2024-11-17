const Pilha = require('../src/Pilha');

describe("Pilha - Operações Gerais", () => {
    test("Empilhar e verificar topo", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        expect(pilha.topo()).toBe(1);
        pilha.empilhar(2);
        expect(pilha.topo()).toBe(2);
    });

    test("Desempilhar até vazio", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        pilha.empilhar(2);
        expect(pilha.desempilhar()).toBe(2);
        expect(pilha.desempilhar()).toBe(1);
        expect(pilha.tamanhoPilha()).toBe(0);
    });

    test("Empilhar e desempilhar um único elemento", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        expect(pilha.topo()).toBe(1);
        expect(pilha.desempilhar()).toBe(1);
        expect(pilha.tamanhoPilha()).toBe(0);
    });

    test("Empilhar múltiplos elementos e verificar topo após cada operação", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        expect(pilha.topo()).toBe(1);
        pilha.empilhar(2);
        expect(pilha.topo()).toBe(2);
        pilha.empilhar(3);
        expect(pilha.topo()).toBe(3);
    });

    test("Desempilhar múltiplos elementos e verificar ordem LIFO", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        pilha.empilhar(2);
        pilha.empilhar(3);
        expect(pilha.desempilhar()).toBe(3);
        expect(pilha.desempilhar()).toBe(2);
        expect(pilha.desempilhar()).toBe(1);
        expect(pilha.tamanhoPilha()).toBe(0);
    });

    test("Empilhar após esvaziar a pilha", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        pilha.desempilhar();
        pilha.empilhar(2);
        expect(pilha.topo()).toBe(2);
        expect(pilha.tamanhoPilha()).toBe(1);
    });

    test("Verificar tamanho da pilha após várias operações", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        pilha.empilhar(2);
        expect(pilha.tamanhoPilha()).toBe(2);
        pilha.desempilhar();
        expect(pilha.tamanhoPilha()).toBe(1);
    });

    test("Operações mistas de empilhar e desempilhar", () => {
        const pilha = new Pilha();
        pilha.empilhar(1);
        pilha.empilhar(2);
        pilha.desempilhar();
        pilha.empilhar(3);
        expect(pilha.topo()).toBe(3);
        expect(pilha.desempilhar()).toBe(3);
        expect(pilha.topo()).toBe(1);
    });
});
