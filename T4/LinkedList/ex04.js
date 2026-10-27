
const LinkedList = require('./LinkedList');

// Funcao auxiliar para montar uma lista nova a cada teste
function criarLista() {
    const lista = new LinkedList();
    [10, 20, 30, 40, 50].forEach((valor) => lista.insertAtEnd(valor));
    return lista;
}

// ===== a) Remover um valor especifico =====
console.log('===== a) Remocao de valores =====');

const listaA = criarLista();
console.log('Lista original:');
listaA.toString();

console.log('\nRemovendo o primeiro valor (10):');
listaA.removeByValue(10);
listaA.toString();

console.log('\nRemovendo um valor do meio (30):');
listaA.removeByValue(30);
listaA.toString();

console.log('\nRemovendo o ultimo valor (50):');
listaA.removeByValue(50);
listaA.toString();

console.log('\nTentando remover um valor inexistente (99):');
listaA.removeByValue(99);
listaA.toString();

console.log(`Tamanho final: ${listaA.size()}`);

// ===== b) Buscar um valor na lista =====
console.log('\n===== b) Busca de valores =====');

const listaB = criarLista();
listaB.toString();

// Buscar o valor 30
let resultado = listaB.find(30);

if (resultado !== undefined) {
    console.log('O valor 30 esta presente na lista.');
} else {
    console.log('O valor 30 nao esta presente na lista.');
}

// Buscar o valor 10
resultado = listaB.find(10);

if (resultado !== undefined) {
    console.log('O valor 10 esta presente na lista.');
} else {
    console.log('O valor 10 nao esta presente na lista.');
}

// Buscar o valor 50
resultado = listaB.find(50);

if (resultado !== undefined) {
    console.log('O valor 50 esta presente na lista.');
} else {
    console.log('O valor 50 nao esta presente na lista.');
}

// Buscar o valor 99
resultado = listaB.find(99);

if (resultado !== undefined) {
    console.log('O valor 99 esta presente na lista.');
} else {
    console.log('O valor 99 nao esta presente na lista.');
}

// ===== c) Conversao para array =====
console.log('\n===== c) Conversao para array =====');

const listaC = criarLista();
listaC.toString();

const array = listaC.toArray();

console.log('Array resultante:');
console.table(array);
console.log(`Quantidade de elementos: ${array.length}`);
