// Função responsável por calcular o nível do jogador
function calcularNivelRankeado(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

// Simulação de vários jogadores
let jogadores = [
    { vitorias: 8, derrotas: 2 },
    { vitorias: 15, derrotas: 5 },
    { vitorias: 38, derrotas: 10 },
    { vitorias: 67, derrotas: 20 },
    { vitorias: 92, derrotas: 30 },
    { vitorias: 120, derrotas: 40 }
];

// Laço para processar todos os jogadores
for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularNivelRankeado(
        jogadores[i].vitorias,
        jogadores[i].derrotas
    );
    console.log(resultado);
}
