const Node = require('./Node'); // Importa a classe Node para criar os elementos da fila

class Fila {
    constructor() {
        this.head = null; // Ponteiro para o início da fila
        this.tamanho = 0; // Contador para rastrear o número de elementos na fila
    }

    enfileirar(valor) {
        const novoNo = new Node(valor); // Cria um novo nó com o valor fornecido
        if (!this.head) {
            // Caso a fila esteja vazia, o novo nó se torna o primeiro
            this.head = novoNo;
        } else {
            let atual = this.head; // Começa no início da fila
            while (atual.proximo) {
                // Percorre até o último nó
                atual = atual.proximo;
            }
            atual.proximo = novoNo; // Faz o último nó apontar para o novo nó
        }
        this.tamanho++; // Incrementa o tamanho da fila
    }

    desenfileirar() {
        if (!this.head) {
            // Verifica se a fila está vazia
            throw new Error("A fila está vazia.");
        }
        const valor = this.head.valor; // Armazena o valor do nó no início da fila
        
        // Atualiza o ponteiro head para o próximo nó
        // ...

        this.tamanho--; // Decrementa o tamanho da fila
        return valor; // Retorna o valor removido da fila
    }

    frente() {
        if (!this.head) {
            // Verifica se a fila está vazia
            throw new Error("A fila está vazia.");
        }
        // Retorna o valor do nó no início da fila
        return null; // corrija aqui 
    }

    tamanhoFila() {
        return this.tamanho; // Retorna o número de elementos na fila
    }
}

module.exports = Fila; // Exporta a classe para uso externo
