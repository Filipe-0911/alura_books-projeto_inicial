function aplicarDesconto(livros) {
    const desconto = 0.3;
    

    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }

    })

    for (i = 0; i < livrosComDesconto.length; i++) {
        console.table(livros[i].quantidade)
        var precoLivros = livrosComDesconto[i].preco.toFixed(2);
        precosComDesconto.push(precoLivros);


    }

    return livrosComDesconto;
}