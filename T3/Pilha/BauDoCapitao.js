const MinhaPilha = require('./MinhaPilha');
 
class BauDoCapitao extends MinhaPilha {
 
    // Guarda um novo tesouro no baú (empilha)
    guardarTesouro(tesouro) {
        this.adicionar(tesouro);
        console.log(`"${tesouro}" foi guardado no baú.`);
    }
 
    // Retira o último tesouro guardado (desempilha)
    retirarTesouro() {
        if (this.estaVazia()) {
            console.log("O baú está vazio, não há o que retirar!");
            return undefined;
        }
 
        const tesouro = this.remover();
        console.log(`Barbarruiva retirou "${tesouro}" do baú.`);
        return tesouro;
    }
 
    // Olha qual é o último tesouro sem pegá-lo
    verUltimoTesouro() {
        if (this.estaVazia()) {
            console.log("O baú está vazio, não há tesouro para olhar.");
            return undefined;
        }
 
        const tesouro = this.topo();
        console.log(`O último tesouro guardado é: "${tesouro}"`);
        return tesouro;
    }
 
    // Informa se o baú está vazio
    // (nome diferente de estaVazia() para não sobrescrever o método da pilha)
    estaVazio() {
        const vazio = this.estaVazia();
        console.log(vazio ? "O baú está vazio." : `O baú tem ${this.tamanhoPilha()} tesouro(s).`);
        return vazio;
    }
}
 
module.exports = BauDoCapitao;