const LinkedList = require('./LinkedList');

const trilha = new LinkedList();

// O explorador comeca a trilha em um ponto especifico
trilha.insertAtEnd('Caverna Sombria');
console.log('Ponto inicial definido.');
trilha.toString();

// Novos pontos descobertos durante a jornada
console.log('\nInserindo pontos no inicio e no fim da trilha:');
trilha.insertAtBeginning('Cachoeira Azul');
trilha.insertAtEnd('Mirante do Vale');
trilha.insertAtEnd('Penhasco Perigoso');
trilha.insertAtEnd('Lago Escondido');
trilha.toString();
console.log(`Total de pontos: ${trilha.size()}`);

// O explorador descobre que um local e muito perigoso e o remove
console.log('\nRemovendo o local perigoso (Penhasco Perigoso):');
trilha.removeByValue('Penhasco Perigoso');
trilha.toString();
console.log(`Total de pontos: ${trilha.size()}`);

// Verifica se o mirante ainda faz parte da trilha
console.log('\nVerificando se o mirante ainda esta na trilha:');
const mirante = trilha.find('Mirante do Vale');

if (mirante !== undefined) {
    console.log(`O local "${mirante.value}" ainda faz parte da trilha.`);
} else {
    console.log('O mirante nao faz mais parte da trilha.');
}
