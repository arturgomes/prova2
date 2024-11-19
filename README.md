# Avaliação 2 - Algoritmos 2 - Estruturas de Dados lineares em JavaScript

Este projeto implementa estruturas de dados usando JavaScript:

1. **Lista**: Uma estrutura de lista encadeada simples, com métodos para inserir, remover e buscar elementos.
2. **Lista duplamente encadeada (DLL)**: Uma estrutura de lista duplamente encadeada, com métodos para inserir, remover e buscar elementos.
3. **Fila**: Uma estrutura de fila (FIFO - Primeiro a Entrar, Primeiro a Sair) usando nós.
4. **Pilha**: Uma estrutura de pilha (LIFO - Último a Entrar, Primeiro a Sair) usando nós.


## **O que você deve fazer**

Você deverá:
1. Completar os métodos indicados.
2. Validar o funcionamento usando os testes fornecidos (rode os testes quantas vezes quiser).
3. Quando concluir sua avaliação, chame o professor para que ele anote sua pontuação baseada nos testes.

## **Regras da Avaliação**

Para garantir a integridade e o aprendizado individual, as seguintes regras devem ser seguidas durante a realização da avaliação:

1. **Proibido Consultar o Google:**
   - Durante a avaliação, **não será permitido acessar mecanismos de busca ou consultar conteúdos externos na internet**.
   - O objetivo é avaliar seu domínio sobre o conteúdo apresentado em aula.

2. **Sem Consultar Anotações:**
   - **Não** será permitido o uso de anotações, resumos ou materiais pessoais.
   - Concentre-se em aplicar o que foi aprendido e sua lógica de programação.

3. **Código Original:**
   - **Todo o código deve ser desenvolvido por você**. Não será permitido copiar código de colegas ou fontes externas.

4. **Testes Automatizados:**
   - Use os testes fornecidos no projeto para validar suas implementações. Eles são seu guia para saber se a funcionalidade está correta.
   - **Não é permitido modificar os testes**.

5. **Implementar os Trechos Incompletos:**
   - O foco da avaliação está nos trechos marcados com `// ...`. Complete essas partes com base nos requisitos de cada método.

6. **Integridade da Estrutura:**
   - Não altere os métodos já implementados (como os `throw`), exceto onde indicado. A estrutura deve ser mantida conforme fornecida.

7. **Prazo: 19/11/2024 - 22h40**
   - Certifique-se de entregar a avaliação no prazo estipulado pelo professor.

8. **Respeito e Ética:**
   - Trabalhe de forma ética e responsável. Casos de plágio ou consulta não autorizada serão tratados de acordo com as regras institucionais.

### **Conselho Final**

Confie no que aprendeu e desafie-se a resolver os problemas por conta própria. Boa sorte! 🚀

## Objetivo da Atividade

Os alunos devem localizar os trechos de código indicados com `// ...` e completar as implementações necessárias para que as estruturas funcionem corretamente. Além disso, será necessário garantir que todos os testes sejam aprovados.

## Instruções de Execução

### 1. Clone o Repositório

Abra o `terminal` do linux, no canto superior esquerdo da tela, onde tem uma barra de busca. Execute os comandos abaixo para clonar o repositório em sua máquina e navegar até a pasta do projeto:

```bash
git clone https://github.com/arturgomes/prova2.git
cd prova2
code .
```

### 2. Instale as Dependências

Certifique-se de ter o Node.js instalado. Em seguida, execute:

```bash
npm install
```

### 3. Complete o Código

Abra os arquivos de código no diretório `src` usando o editor de sua escolha (VS Code, por exemplo). Localize os trechos que contêm `// ...` (busque na lupa do VScode) e complete as implementações das funções indicadas.

Os arquivos principais estão em:
- `src/Lista.js`
- `src/Fila.js`
- `src/Pilha.js`
- `src/ListaDuplamenteEncadeada.js.js`

Os trechos incompletos geralmente envolvem manipulação de ponteiros ou validações. Leia os métodos e implemente as partes necessárias.

### 4. Execute os Testes

Após completar as implementações, você pode validar seu código executando os testes automatizados:

```bash
npm test
```

Os testes estão localizados no diretório `tests`. Eles verificam o comportamento esperado de todas as estruturas de dados. Seu objetivo é passar 100% dos testes.

### 5. Verifique os Resultados

Ao rodar os testes, o resultado será exibido no terminal. Garanta o máximo de testes aprovados possíveis. Quando terminar sua atividade, chame o professor para que ele compute sua nota.

### 6. O que esperar dos testes?

Quando executar os testes, você verá algo como isso:

```bash
$ node runTests.js
 PASS  tests/pilha.test.js
 PASS  tests/fila.test.js
 PASS  tests/lista.test.js
 PASS  tests/listaDuplamenteEncadeada.test.js

Test Suites: 4 passed, 4 total
Tests:       27 passed, 27 total
Snapshots:   0 total
Time:        0.764 s
Ran all test suites.

=== Resultados dos Testes ===
Testes Totais: 27
Testes Aprovados: 27
Testes Reprovados: 0
Porcentagem de Acertos: 100.00%

✨  Done in 1.99s.
```
A porcentagem de acertos é proporcional ao número de testes aprovados em relação ao total de casos de testes.

## Estrutura do Projeto

Abaixo está a estrutura básica do projeto:

```
estruturas_dados_js/
├── src/
│   ├── Fila.js                         # Classe para fila
│   ├── Node.js                         # Classe base para os nós das estruturas
│   ├── Lista.js                        # Classe para lista encadeada
│   ├── ListaDuplamenteEncadeada.js     # Classe para lista duplamente encadeada
│   ├── NodeDLL.js                      # Classe base para nós duplamente encadeados
│   ├── Pilha.js                        # Classe para pilha
├── tests/
│   ├── estruturas.test.js              # Testes automatizados (Não altere)
├── package.json                        # Configurações do projeto (Não altere)
└── README.md                           # Documentação do projeto (Não altere)
```


# **Explicação sobre o `throw`**

No JavaScript, a instrução `throw` é usada para lançar uma exceção. Quando uma exceção é lançada, ela interrompe a execução normal do programa e deve ser tratada (ou capturada) para evitar que o programa falhe.

No contexto deste projeto, o `throw` é usado para indicar situações em que as operações nas estruturas de dados (Lista, Fila, Pilha) não podem ser realizadas, como:
- **Lista vazia:** Tentar remover ou acessar elementos em uma lista sem itens.
- **Posição inválida:** Tentar acessar ou remover uma posição inexistente na lista.
- **Fila vazia:** Tentar remover ou consultar o início de uma fila vazia.
- **Pilha vazia:** Tentar remover ou consultar o topo de uma pilha vazia.

### **Por que você não deve alterar os `throw`?**

Os `throw` são essenciais para:
1. **Garantir a consistência das estruturas de dados:** Eles impedem que operações inválidas sejam realizadas, protegendo a integridade dos dados.
2. **Facilitar a depuração:** Ao lançar uma exceção com uma mensagem clara, você (ou os testes automatizados) podem identificar rapidamente o problema.
3. **Passar nos testes automatizados:** Os testes dependem das mensagens de erro lançadas pelos `throw`. Alterar ou remover os `throw` resultará em falhas nos testes.

### **Mensagens de Erro Usadas no Projeto**

Aqui estão as mensagens de erro que os `throw` lançam e quando são usadas:

| Estrutura  | Método                   | Mensagem de Erro                | Quando é Lançado                                |
|------------|--------------------------|----------------------------------|------------------------------------------------|
| **Lista**  | `removerNoInicio`        | `Lista está vazia.`             | Quando a lista não possui elementos.           |
| **Lista**  | `removerNoFinal`         | `Lista está vazia.`             | Quando a lista não possui elementos.           |
| **Lista**  | `removerNaPosicao`       | `Lista está vazia.`             | Quando a lista não possui elementos.           |
| **Lista**  | `removerNaPosicao`       | `Posição inválida.`             | Quando a posição está fora dos limites.        |
| **Lista**  | `buscar`                 | `Posição inválida.`             | Quando a posição está fora dos limites.        |
| **Lista**  | `removerPorValor`        | `Valor não encontrado.`         | Quando o valor não está presente na lista.     |
| **Fila**   | `desenfileirar`          | `A fila está vazia.`            | Quando a fila não possui elementos.            |
| **Fila**   | `frente`                 | `A fila está vazia.`            | Quando a fila não possui elementos.            |
| **Pilha**  | `desempilhar`            | `A pilha está vazia.`           | Quando a pilha não possui elementos.           |
| **Pilha**  | `topo`                   | `A pilha está vazia.`           | Quando a pilha não possui elementos.           |

### **Exemplo de `throw` no Código**

No método `removerNoInicio` da classe `Lista`:

```javascript
removerNoInicio() {
    if (!this.head) { // Verifica se a lista está vazia
        throw new Error("Lista está vazia."); // Lança uma exceção se a lista estiver vazia
    }
    const valor = this.head.valor;
    this.head = this.head.proximo; // Atualiza o ponteiro para o próximo nó
    this.tamanho--; // Decrementa o tamanho da lista
    return valor; // Retorna o valor removido
}
```

Neste exemplo:
1. O `throw` lança a mensagem `"Lista está vazia."` quando a lista não possui elementos.
2. Isso evita que a operação continue e potencialmente cause erros ou resultados incorretos.

---

### **Resumo para os Alunos**

1. **Não altere ou remova os `throw` no código.** Eles foram colocados para proteger as estruturas de dados e garantir que os testes automatizados sejam aprovados.
2. **Leia atentamente as mensagens lançadas pelos `throw`.** Elas ajudam a identificar problemas e corrigir possíveis falhas no seu código.
3. Concentre-se em completar os métodos incompletos (`// ...`) e em garantir que todas as condições sejam verificadas antes de executar uma operação 19/11/2024 - 22h40.

Se precisar de ajuda para entender o uso do `throw` em alguma parte do código, pergunte ao professor! 🚀