
const Node = require('./Node.js');

class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    // Inserir no final
    append(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        this.#length++;
    }

    // Inserir no inicio
    prepend(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#length++;
    }

    // Remover o ultimo no
    removeLast() {
        if (this.#tail === undefined) return undefined;

        const removedNode = this.#tail;

        if (this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    // Remover o primeiro no
    removeFirst() {
        if (this.#head === undefined) return undefined;

        const removedNode = this.#head;

        if (this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    // Percorrer do inicio ao fim
    traverse() {
        if (this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#head;

        while (current !== undefined) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorrer do fim ao inicio
    traverseReverse() {
        if (this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#tail;

        while (current !== undefined) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // Inserir em uma posicao especifica
    insertAt(value, index) {
        if (index < 0 || index > this.#length) return undefined;

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.#length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.#head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;

        this.#length++;
    }

    // Encontrar o indice de um valor
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

    // Remover um no em uma posicao especifica
    removeAt(index) {
        if (index < 0 || index >= this.#length) return undefined;

        if (index === 0) return this.removeFirst();
        if (index === this.#length - 1) return this.removeLast();

        let current = this.#head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#length--;
        return current.value;
    }

    // ===== Metodos novos =====

    // a) Remover um valor especifico
    removeByValue(value) {
        let current = this.#head;

        while (current !== undefined) {
            if (current.value === value) {
                if (current === this.#head) {
                    this.removeFirst();
                } else if (current === this.#tail) {
                    this.removeLast();
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    this.#length--;
                }

                return true;
            }

            current = current.next;
        }

        return false;
    }

    // b) Buscar um valor na lista
    find(value) {
        let current = this.#head;

        while (current !== undefined) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return undefined;
    }

    // c) Converter a lista para array
    toArray() {
        const array = [];
        let current = this.#head;

        while (current !== undefined) {
            array.push(current.value);
            current = current.next;
        }

        return array;
    }

    // Retornar o tamanho
    size = () => this.#length;

    // Verificar se esta vazia
    isEmpty = () => this.#length === 0;

    // Exibir a lista
    toString() {
        let current = this.#head;
        let list = '';

        while (current !== undefined) {
            list += current.value + ' <-> ';
            current = current.next;
        }

        console.log(list + 'undefined');
    }
}

module.exports = DoublyLinkedList;