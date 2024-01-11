const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivel() {
    // Solicita ao usuário que insira o número de vitórias e derrotas
    rl.question("Digite o número de vitórias: ", (vitorias) => {
        rl.question("Digite o número de derrotas: ", (derrotas) => {
            // Converte as entradas do usuário para números inteiros
            vitorias = parseInt(vitorias);
            derrotas = parseInt(derrotas);

            // Verifica se as entradas são números válidos
            if (isNaN(vitorias) || isNaN(derrotas)) {
                console.log("Por favor, insira números válidos.");
                rl.close();
                return;
            }

            let saldoVitorias = vitorias - derrotas;
            let nivel;

            if (saldoVitorias < 10) {
                nivel = "Ferro";
            } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
                nivel = "Bronze";
            } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
                nivel = "Prata";
            } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
                nivel = "Ouro";
            } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
                nivel = "Diamante";
            } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
                nivel = "Lendário";
            } else {
                nivel = "Imortal";
            }

            console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
            rl.close();
        });
    });
}

// Chama a função para calcular o nível com base nas entradas do usuário
calcularNivel();
