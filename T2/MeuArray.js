class MeuArray {
    #itens = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#itens[this.#tamanho] = elemento;

        this.#tamanho++;
    }
    editar(indice, novoValor) {
        this.#itens[indice] = novoValor;
    }
    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoItem = this.#itens[this.#tamanho - 1];

        delete this.#itens[this.#tamanho - 1];

        this.#tamanho--;

        return ultimoItem;
    }
    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho) {

            return undefined;
        }

        return this.#itens[indice];
    }
    obterIndice(elemento) {

        let indice_encontrado = -1;

        for (let i = 0; i < this.#tamanho; i++) {
            if (this.#itens[i] === elemento) {
                indice_encontrado = i;
                break;
            }
        }
        return indice_encontrado;
    }
    tamanhoArray = () => this.#tamanho;
    limpar() {
        this.#itens = [];

        this.#tamanho = 0;
    }
    toString = () => console.table(this.#itens);

    findDuplicados() {
    const duplicados = [];
    let tamanhoDuplicados = 0;

    // Passa por cada item da lista (item atual)
    for (let i = 0; i < this.#tamanho; i++) {
        // Compara o item atual com todos os itens que vêm depois dele
        for (let j = i + 1; j < this.#tamanho; j++) {
            if (this.#itens[i] === this.#itens[j]) {
                // Armazena o valor, a posição original (i) e a posição da duplicação (j)
                duplicados[tamanhoDuplicados] = {
                    valor: this.#itens[i],
                    posicaoOriginal: i,
                    posicaoDuplicada: j
                };
                tamanhoDuplicados++;
            }
        }
    }

    return duplicados;
}

    inserirPosicao(valor, indice) {
        // Validação para garantir que o índice existe na lista
        if (indice < 0 || indice > this.#tamanho) {
        return undefined; 
        }    
        
        for (let i = this.#tamanho; i > indice; i--) {
                this.#itens[i] = this.#itens[i - 1];
                }
            
        this.#itens[indice] = valor;
        this.#tamanho++;

    }

    removerItem(indice) {
        // Validação para garantir que o índice existe na lista
        if (indice < 0 || indice >= this.#tamanho) {
        return undefined; 
        }

        // Salva o item deletado
        const itemDeletado = this.#itens[indice];
        
        // Desloca os elementos subsequentes uma posição para a esquerda
        for (let i = indice; i < this.#tamanho - 1; i++) {
        this.#itens[i] = this.#itens[i + 1];
        }

        // Remove o último elemento que ficou duplicado e reduz o tamanho
        delete this.#itens[this.#tamanho - 1];
        this.#tamanho--;
        return itemDeletado;
    
    }
    
    removerValor(valor) {   
        for (let i = 0; i < this.#tamanho; i++) {
            if (valor === this.#itens[i]) {
                
                // Quando encontra o valor, chama o método removerItem no índice atual
                this.removerItem(i);
                
                // Decrementa o 'i' para não pular o próximo elemento que acabou de ocupar esta posição
                i--;
            }
        }
    }
}

module.exports = MeuArray;