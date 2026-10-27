const Node = require('./Node.js');

class LinkedList {
    #head = undefined;
    #length = 0;

    insertAtBeginning(value) {
        //Cria um novo nó
        let newNode = new Node(value);

        // O novo nó aponta para o antigo "head"
        newNode.next = this.#head;

        // Atualiza o "head" para o novo nó
        this.#head = newNode;

        // Incrementa o tamnho da lista
        this.#length++;
    }
    insertAtEnd(value) {
        let newNode = new Node(value);

        // Se a lista estivez vazia, o novo nó se torna o "head"
        if (this.#head === undefined) {
            this.#head = newNode;
            this.#length++;
            return;
        }

        // Percorre até o último nó
        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
        }

        // Faz o último nó apontar para o novo nó
        current.next = newNode;

        this.#length++;
    }
    removeByValue(value) {

        // A lista está vazia
        if (this.#head === undefined) {
            return;
        }

        // Se o valor a ser removido estiver no primeiro nó
        if (this.#head.value === value) {

            // Atualiza o "head" para o próximo nó
            this.#head = this.#head.next;
            this.#length--; // Decrementa aqui, pois removeu o primeiro nó
            return;
        }

        // Percorre a lista procurando o nó a ser removido
        let current = this.#head;
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se o nó foi encontrado, ajusta o ponteiro para pular o nó removido
        if (current.next !== undefined) {
            current.next = current.next.next;
            this.#length--; // Decrementa aqui, pois um nó interno foi removido
        }

    }
    find(value) {
        let current = this.#head;

        // Percorre a lista até se encontrar o nó ou até o final 
        while (current !== undefined) {
            if(current.value === value) {
                return current; // Nó encontrado
            }
            current = current.next;
        }
        return undefined; // Se não encontrar, retorna undefined
    }
    size() {
        let count = 0;
        let current = this.#head;
        while (current !== undefined) {
            count++;
            current = current.next;
        }
        return count;
    }
    // Retorna true se a lista estiver vazia
    isEmpty = () => this.#head === undefined;
    // Exibir a lista (opcional, para facilitar a visualização)
    toString() {
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }

    // ===== Metodos adicionados =====

    // Retorna a posicao (comecando em 0) do valor, ou -1 se nao existir
    indexOf(value) {
        let current = this.#head;
        let index = 0;

        while (current !== undefined) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    // Insere o valor em uma posicao especifica (comecando em 0)
    // Retorna true se inseriu e false se a posicao for invalida
    insertAt(index, value) {
        if (index < 0 || index > this.size()) {
            return false;
        }

        // Inserir na posicao 0 equivale a inserir no inicio
        if (index === 0) {
            this.insertAtBeginning(value);
            return true;
        }

        // Caminha ate o no anterior a posicao desejada
        let current = this.#head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Encaixa o novo no entre o anterior e o seguinte
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;

        this.#length++;
        return true;
    }

    // Converte a lista encadeada para um array
    toArray() {
        const result = [];
        let current = this.#head;

        while (current !== undefined) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }
}

module.exports = LinkedList;
