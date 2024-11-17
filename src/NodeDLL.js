class NodeDLL {
  constructor(valor) {
      this.valor = valor; // Valor armazenado no nó
      this.proximo = null; // Ponteiro para o próximo nó
      this.anterior = null; // Ponteiro para o nó anterior
  }
}

module.exports = NodeDLL;
