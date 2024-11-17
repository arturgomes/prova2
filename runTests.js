const { runCLI } = require('jest'); // Importa a API do Jest

async function runTests() {
    // Configuração básica do Jest
    const config = {
        projects: [process.cwd()], // Define o diretório atual como projeto
        // silent: true, // Reduz a saída de log
    };

    try {
        // Executa os testes usando a API do Jest
        const results = await runCLI(config, config.projects);

        // Extrai informações dos resultados
        const totalTests = results.results.numTotalTests;
        const passedTests = results.results.numPassedTests;
        const failedTests = results.results.numFailedTests;

        // Calcula a porcentagem de acertos
        const successRate = ((passedTests / totalTests) * 100).toFixed(2);

        // Exibe os resultados
        console.log(`\n=== Resultados dos Testes ===`);
        console.log(`Testes Totais: ${totalTests}`);
        console.log(`Testes Aprovados: ${passedTests}`);
        console.log(`Testes Reprovados: ${failedTests}`);
        console.log(`Porcentagem de Acertos: ${successRate}%\n`);

        // Retorna o código de saída apropriado
        process.exit(failedTests > 0 ? 1 : 0);
    } catch (error) {
        console.error(`Erro ao executar os testes:`, error);
        process.exit(1);
    }
}

runTests();
