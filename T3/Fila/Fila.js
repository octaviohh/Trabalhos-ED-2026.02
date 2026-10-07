class Fila {
    #itens = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) {
        // Coloca o elemento no fim da fila
        this.#itens[this.#fim] = elemento;

        // Incrementa o índice do fim da fila
        this.#fim++;
    }
    dequeue() {
        // Se a fila estiver vazia, retorna undefined
        if (this.estaVazia()) {
            return undefined;
        }

        // Obtém o primeiro elemento
        const item = this.#itens[this.#inicio];

        // Remove o item do incio da fila
        delete this.#itens[this.#inicio];

        // Move o índice do início para o próximo item
        this.#inicio++;

        // Quando o inicio e o fim estiverem alinhados, redefine a fila
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item; //Retorna o item removido
    }
    front() {
        // Se a fila estiver vazia retorna undefined 
        if(this.estaVazia()) {
            return undefined;
        }
        // Retorna o primeiro elemento 
        return this.#itens[this.#inicio];
    }
    estaVazia = () => this.#fim === this.#inicio;
    tamanho = () => this.#fim - this.#inicio;
    limpar() {
        this.#itens = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}

module.exports = Fila;