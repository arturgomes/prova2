const NodeDLL = require('./NodeDLL'); // Importa a classe NodeDLL para criar nós duplamente encadeados

class ListaDuplamenteEncadeada {
    constructor() {
        this.head = null; // Ponteiro para o primeiro nó da lista
        this.tail = null; // Ponteiro para o último nó da lista
        this.tamanho = 0; // Contador para rastrear o número de elementos na lista
    }

    inserirNoInicio(valor) {
        const novoNo = new NodeDLL(valor); // Cria um novo nó com o valor fornecido
        if (!this.head) { // Caso a lista esteja vazia
            this.head = this.tail = novoNo; // O novo nó se torna o primeiro e o último
        } else {
            novoNo.proximo = this.head; // O novo nó aponta para o atual primeiro nó
           
            // O atual primeiro nó aponta de volta para o novo nó
            //...
           
            this.head = novoNo; // Atualiza o ponteiro head para o novo nó
        }
        this.tamanho++; // Incrementa o tamanho da lista
    }

    inserirNoFinal(valor) {
        const novoNo = new NodeDLL(valor); // Cria um novo nó com o valor fornecido
        if (!this.head) { // Caso a lista esteja vazia
            this.head = this.tail = novoNo; // O novo nó se torna o primeiro e o último
        } else {
            novoNo.anterior = this.tail; // O novo nó aponta para o atual último nó

            // O atual último nó aponta para o novo nó
            //...

            this.tail = novoNo; // Atualiza o ponteiro tail para o novo nó
        }
        this.tamanho++; // Incrementa o tamanho da lista
    }

    inserirNaPosicao(valor, posicao) {
        if (posicao < 0 || posicao > this.tamanho) { // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        if (posicao === 0) { // Insere no início se a posição for 0
            this.inserirNoInicio(valor);
            return;
        }
        if (posicao === this.tamanho) { 
            // Insere no final se a posição for igual ao tamanho
            // ...
            return;
        }
        const novoNo = new NodeDLL(valor); // Cria um novo nó com o valor fornecido
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao - 1; i++) { // Avança até o nó anterior à posição
            atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo; // O novo nó aponta para o próximo nó
        
        // O novo nó aponta para o nó atual
        //...
        
        atual.proximo.anterior = novoNo; // O próximo nó aponta para o novo nó
        atual.proximo = novoNo; // O nó atual aponta para o novo nó
        this.tamanho++; // Incrementa o tamanho da lista
    }

    removerNoInicio() {
        if (!this.head) { // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        const valor = this.head.valor; // Armazena o valor do nó a ser removido
        
        // Atualiza o ponteiro head para o próximo nó
        // ...
        
        if (this.head) { // Se ainda houver elementos na lista
        
            // Remove o link para o nó anterior
            //...
        
        } else {
            this.tail = null; // Se a lista ficou vazia, zera o ponteiro tail
        }
        this.tamanho--; // Decrementa o tamanho da lista
        return valor; // Retorna o valor do nó removido
    }

    removerNoFinal() {
        if (!this.tail) { // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        const valor = this.tail.valor; // Armazena o valor do nó a ser removido
        
        // Atualiza o ponteiro tail para o nó anterior
        //...
        
        if (this.tail) { // Se ainda houver elementos na lista
            this.tail.proximo = null; // Remove o link para o próximo nó
        } else {
            this.head = null; // Se a lista ficou vazia, zera o ponteiro head
        }
        this.tamanho--; // Decrementa o tamanho da lista
        return valor; // Retorna o valor do nó removido
    }

    removerPorValor(valor) {
        if (!this.head) { // Verifica se a lista está vazia
            throw new Error("Lista está vazia.");
        }
        let atual = this.head; // Começa no primeiro nó
        if (atual.valor === valor) { // Se o valor está no primeiro nó
            return this.removerNoInicio();
        }
        while (atual && atual.valor !== valor) { // Percorre até encontrar o nó com o valor
            atual = atual.proximo;
        }
        if (!atual) { // Se não encontrar o valor
            throw new Error("Valor não encontrado.");
        }
        if (atual === this.tail) { // Se o valor está no último nó
            return this.removerNoFinal();
        }
        atual.anterior.proximo = atual.proximo; // O nó anterior aponta para o próximo nó
        
        // O próximo nó aponta para o nó anterior
        //...
        
        this.tamanho--; // Decrementa o tamanho da lista
        return atual.valor; // Retorna o valor do nó removido
    }

    removerNaPosicao(posicao) {
        if (posicao < 0 || posicao >= this.tamanho) { // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        if (posicao === 0) { // Remove no início se a posição for 0
            return this.removerNoInicio();
        }
        if (posicao === this.tamanho - 1) { // Remove no final se a posição for o último elemento
            return null; // corrija aqui
        }
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao; i++) { // Avança até o nó na posição
            atual = atual.proximo;
        }
        atual.anterior.proximo = atual.proximo; // O nó anterior aponta para o próximo nó
        
        // O próximo nó aponta para o nó anterior
        //...
        
        this.tamanho--; // Decrementa o tamanho da lista
        return atual.valor; // Retorna o valor do nó removido
    }

    buscar(posicao) {
        if (posicao < 0 || posicao >= this.tamanho) { // Verifica se a posição é inválida
            throw new Error("Posição inválida.");
        }
        let atual = this.head; // Começa no primeiro nó
        for (let i = 0; i < posicao; i++) { // Percorre até a posição desejada
            atual = atual.proximo;
        }
        return atual.valor; // Retorna o valor do nó na posição
    }

    tamanhoLista() {
        return this.tamanho; // Retorna o número de elementos na lista
    }
}

module.exports = ListaDuplamenteEncadeada; // Exporta a classe para uso externo
