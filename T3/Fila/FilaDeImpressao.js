const Fila = require('./Fila');

class FilaDeImpressao extends Fila {
    #capacidade;

    constructor(capacidade = 5) {
        super();                      
        this.#capacidade = capacidade;
    }

    // Adiciona um documento na fila, respeitando a capacidade máxima
    adicionarDocumento(nome, paginas) {
        if (this.tamanho() >= this.#capacidade) {
            console.log(`Fila cheia (${this.#capacidade} documentos). "${nome}" nao foi adicionado.`);
            return false;
        }

        this.enqueue({ nome, paginas });
        console.log(`Documento "${nome}" (${paginas} paginas) adicionado a fila.`);
        return true;
    }

    // Imprime um documento e agenda o próximo quando terminar
    processar() {
        if (this.estaVazia()) {
            console.log('Todos os documentos foram impressos.');
            return;
        }

        const doc = this.dequeue();
        console.log(`Imprimindo "${doc.nome}" (${doc.paginas} paginas)...`);

        // 300 ms por página
        setTimeout(() => {
            console.log(`"${doc.nome}" impresso. Restam ${this.tamanho()} documento(s) na fila.`);
            this.processar();
        }, doc.paginas * 300);
    }
}

module.exports = FilaDeImpressao;