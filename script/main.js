let livros = [];
const endpointDaApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`;


getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    try {
        const res = await fetch(endpointDaApi);
        livros = await res.json();
        let livrosComDesconto = aplicarDesconto(livros);
        exibirOsLivrosNaTela(livrosComDesconto);

        //exibirOsLivrosNaTela(livros)
    } catch (erro) {
        
        console.log(erro);
        elementoParaInserirLivros.innerHTML = 
        `
        <p style="text-align: center;">Erro de banco de dados.</p>
        `;
        
    };
}

