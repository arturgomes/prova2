const Node = require('./Node'); // Importa a classe Node para criar os elementos da pilha

class Pilha {
    constructor() {
        this.head = null; // Ponteiro para o topo da pilha
        this.tamanho = 0; // Contador para rastrear o número de elementos na pilha
    }

    empilhar(valor) {
        const novoNo = new Node(valor); // Cria um novo nó com o valor fornecido
        novoNo.proximo = this.head; // Faz o novo nó apontar para o atual topo da pilha
        
        // Atualiza o ponteiro head para apontar para o novo nó
        // ...
        
        this.tamanho++; // Incrementa o tamanho da pilha
    }

    desempilhar() {
        if (!this.head) {
            // Verifica se a pilha está vazia
            throw new Error("A pilha está vazia.");
        }
        const valor = this.head.valor; // Armazena o valor do nó no topo da pilha
        
        // Atualiza o ponteiro head para o próximo nó
        // ...
        
        this.tamanho--; // Decrementa o tamanho da pilha
        return valor; // Retorna o valor removido da pilha
    }

    topo() {
        if (!this.head) {
            // Verifica se a pilha está vazia
            throw new Error("A pilha está vazia.");
        }
        return this.head.valor; // Retorna o valor do nó no topo da pilha
    }

    tamanhoPilha() {
        // Retorna o número de elementos na pilha
        return null // corrja aqui
    }
}

module.exports = Pilha; // Exporta a classe para uso externo
