const MeuArray = require("./MeuArray.js");

const a = new MeuArray();

a.adicionar("João");
a.adicionar("Maria");
a.adicionar("José");
a.adicionar("João");
a.adicionar("Joana");
a.adicionar("João");
a.adicionar("José");
a.adicionar("José");

a.inserirPosicao("Carlos", 0);
a.toString();
a.removerValor("Joana");
a.toString();
a.removerItem(7);
a.toString();