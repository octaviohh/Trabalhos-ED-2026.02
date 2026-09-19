const ContaBancaria = require("./ContaBancaria.js");

const conta = new ContaBancaria(0);

conta.depositar(10000);
conta.sacar(0.99);
conta.depositar(1000);
conta.sacar(5000);
conta.sacar(2300);
conta.versaldo();

const minhaConta = new ContaBancaria(100);

minhaConta.depositar(10);
minhaConta.depositar(10);
minhaConta.depositar(100);
minhaConta.sacar(400);
minhaConta.versaldo();