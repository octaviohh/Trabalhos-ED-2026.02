const FilaDeImpressao = require("./FilaDeImpressao.js");

const impressora = new FilaDeImpressao(5);

impressora.adicionarDocumento('Relatorio.pdf', 4);
impressora.adicionarDocumento('Contrato.docx', 7);
impressora.adicionarDocumento('Apresentacao.pptx', 10);
impressora.adicionarDocumento('Curriculo.pdf', 2);
impressora.adicionarDocumento('Planilha.xlsx', 3);
impressora.adicionarDocumento('Trabalho.docx', 6); 

console.log('\nIniciando impressao...');
impressora.processar();