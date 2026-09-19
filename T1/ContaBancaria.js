class ContaBancaria
{
    #saldo = 0;
    constructor(saldo) {
        this.#saldo = saldo;
    }

    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor;
        }
    }

    sacar(valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        else{
            console.log(`Saldo insuficiente para saque!`)
        }
    }

    versaldo() {
        console.log(`O saldo atual é de R$ ${this.#saldo}`);
    }
}

module.exports = ContaBancaria;