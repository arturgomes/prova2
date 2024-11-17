const Node = require('./Node'); // Importa a classe Node para criar os elementos da lista

class Lista {
    constructor() {
        this.head = null; // Ponteiro para o primeiro nó da lista
        this.tamanho = 0; // Contador para rastrear o número de elementos na lista
    }

    inserirNoInicio(valor) {
        const novoNo = new Node(valor); // Cria um novo nó com o valor fornecido
        novoNo.proximo = this.head; // Faz o novo nó apontar para o atual primeiro nó
        // Atualiza o ponteiro head para apontar para o novo nó
        // ...
        this.tamanho++; // Incrementa o tamanho da lista
    }

    inserirNoFinal(valor) {
        const novoNo = new Node(valor); // Cria um novo nó com o valor fornecido
        if (!this.head) {
            // Caso a lista esteja vazia, o novo nó se torna o primeiro
            // ...
        } else {
            let atual = this.head; // Começa no primeiro nó
            while (atual.proximo) {
                // Percorre até o último nó da lista
                // ...
            }
            atual.proximo = novoNo; // Faz o último nó apontar para o novo nó
        }
        this.tamanho++; // Incrementa o tamanho da lista
    }

    inserirNaPosicao(valor, posicao) {
        if (posicao < 0 || posicao > this.tamanho) {
            // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        if (posicao === 0) {
            // Caso seja a primeira posição, delega para inserirNoInicio
            // ...
            return;
        }
        if (posicao === this.tamanho) {
            // Caso seja a última posição, delega para inserirNoFinal
            // ...
            return;
        }

        const novoNo = new Node(valor); // Cria um novo nó com o valor fornecido
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao - 1; i++) {
            // Percorre até o nó anterior à posição desejada
            atual = atual.proximo;
        }

        novoNo.proximo = atual.proximo; // Faz o novo nó apontar para o nó na posição atual
        atual.proximo = novoNo; // Faz o nó anterior apontar para o novo nó
        this.tamanho++; // Incrementa o tamanho da lista
    }

    removerNoInicio() {
        if (!this.head) {
            // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        const valor = this.head.valor; // Armazena o valor do nó a ser removido
        this.head = this.head.proximo; // Atualiza o ponteiro head para o próximo nó
        this.tamanho--; // Decrementa o tamanho da lista
        return valor; // Retorna o valor do nó removido
    }

    removerNoFinal() {
        if (!this.head) {
            // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        if (!this.head.proximo) {
            // Caso haja apenas um nó, remove o primeiro
            const valor = this.head.valor;
            // ...
            this.tamanho--;
            return valor;
        }

        let atual = this.head; // Começa no primeiro nó
        while (atual.proximo.proximo) {
            // Percorre até o penúltimo nó
            atual = atual.proximo;
        }

        const valor = atual.proximo.valor; // Armazena o valor do último nó
        // ... // Remove o último nó
        this.tamanho--; // Decrementa o tamanho da lista
        return valor; // Retorna o valor do nó removido
    }

    removerNaPosicao(posicao) {
        if (this.tamanho === 0) {
            // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        if (posicao < 0 || posicao >= this.tamanho) {
            // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        if (posicao === 0) return this.removerNoInicio(); // Remove o primeiro nó
        if (posicao === this.tamanho - 1) return this.removerNoFinal(); // Remove o último nó
    
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao - 1; i++) {
            // Percorre até o nó anterior à posição desejada
            atual = atual.proximo;
        }
    
        const valor = atual.proximo.valor; // Armazena o valor do nó a ser removido
        
        // Faz o nó anterior apontar para o próximo do atual
        // ...

        this.tamanho--; // Decrementa o tamanho da lista
        return valor; // Retorna o valor do nó removido
    }

    removerPorValor(valor) {
        if (!this.head) {
            // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }

        if (this.head.valor === valor) {
            // Caso o valor esteja no primeiro nó
            return this.removerNoInicio();
        }

        let atual = this.head; // Começa no primeiro nó
        while (atual.proximo && atual.proximo.valor !== valor) {
            // Percorre até encontrar o nó com o valor desejado
            // ...
        }

        if (!atual.proximo) {
            // Verifica se o valor não foi encontrado
            throw new Error("Valor não encontrado.");
        }

        const removido = atual.proximo.valor; // Armazena o valor do nó a ser removido
        atual.proximo = atual.proximo.proximo; // Faz o nó anterior apontar para o próximo do atual
        // Decrementa o tamanho da lista
        // ...
        return removido; // Retorna o valor do nó removido
    }

    buscar(posicao) {
        if (posicao < 0 || posicao >= this.tamanho) {
            // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao; i++) {
            // Percorre até a posição desejada
            atual = atual.proximo;
        }
        return atual.valor; // Retorna o valor do nó na posição
    }

    tamanhoLista() {
        return this.tamanho; // Retorna o número de elementos na lista
    }
}

module.exports = Lista; // Exporta a classe para uso externo
