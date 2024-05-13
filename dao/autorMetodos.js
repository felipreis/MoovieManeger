const Autor = require('../model/autor');
const client = require('./bd');


function atualizarAutor(){

}
/*

function criarAutor(autor){

    const BD = require('./bd');

    const query = " INSERT INTO ator (nome,datanascimento,nacionalidade) VALUES (" +
                  + "'" + autor.getNome() + "',"
                  + "'" +  autor.getDataNascimento() + "',"
                  + "'" +  autor.getNacionalidade() + "')";

}
*/

async function criarAutor(autor) {
    try {
        // Conecte-se ao banco de dados (se já não estiver conectado)
        if (client._ending || client._connecting || client._connected || client._readyForQuery) {
            console.log('Já conectado ou conectando...');
        } else {
            await client.connect();
        }

        // Construa a query SQL e execute-a
        const query = "INSERT INTO ator (nome, datanascimento, nacionalidade) VALUES ($1, $2, $3)";
        const values = [autor.getNome(), autor.getDataNascimento(), autor.getNacionalidade()];
        await client.query(query, values);

        console.log("Autor criado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar autor:", error);
    }
}



function excluirAutor(){

}

function consultarAutor(){
    
}


// TESTANDO



const ator = new Autor("BradPit",2002,"americano");

criarAutor(ator);