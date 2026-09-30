let lista = [];

lista.push("João");
lista.push("Maria");
lista.push("José");
lista.push("João");
lista.push("Joana");
lista.push("João");
lista.push("José");
lista.push("José");

// a) Encontrar itens duplicados e informar a posição deles
const duplicados = {};
lista.forEach((item, indice) => {

    // conta quantas vezes o item aparece na lista
    const quantidade = lista.filter(outro => outro === item).length;

    if (quantidade > 1) {
        if (!duplicados[item]) {
            duplicados[item] = [];
        }
        duplicados[item].push(indice);
    }
});

console.log(duplicados);

// b) Inserir em uma posição específica (os itens seguintes são empurrados para frente)
lista.splice(2, 0, "Pedro"); 
console.table(lista);

// c) Remover um item dada sua posição (índice)
lista.splice(2, 1);
console.table(lista);

// c) Remover um valor em todas as posições em que ele aparece
lista1 = lista.filter(item => item !== "José");
console.table(lista1);