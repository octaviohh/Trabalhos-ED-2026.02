const BauDoCapitao = require("./BauDoCapitao.js");
const bau = new BauDoCapitao();

bau.estaVazio();                          
bau.guardarTesouro("Moedas de Ouro");
bau.guardarTesouro("Coroa de Rubis");
bau.guardarTesouro("Mapa Secreto");

bau.verUltimoTesouro();                   
bau.retirarTesouro();                     
bau.verUltimoTesouro();                   

bau.retirarTesouro();                     
bau.retirarTesouro();                     
bau.estaVazio();                          
bau.retirarTesouro();                     