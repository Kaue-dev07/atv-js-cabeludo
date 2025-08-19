const filmes = [
    {
        titulo: "Mad max",
        diretor: "George Miller",
        produtora: "Warner Bros" 
    },
    {
        titulo: "Shrek",
        diretor: "Andrew Adamson",
        produtora: "DreamWorks"
    },
    {
        titulo: "Gremelins",
        diretor: "Joe Dante",
        produtora: "Warner Bros"
    },
    {
        titulos: "Hobbit",
        diretor: "Peter Jackson",
        produtora: "Warner Bros"
    }
]

// console.log(filmes[0].titulo);
// console.log(filmes[1].diretor);

//filmesTotal1 mapea o filmes.map e // retorna o titulo de cada filme //"f" é uma variavel teamporaria

let filmesTotal = filmes.map(  //vc usa isso quando tem objetos e fazer o maprsmnento
    (f) => 
        "Filme: " + f.titulo +
        "\nDiretor: " + f.diretor +
        "\n"
)

// console.log(filmesTotal1);

filmesTotal.forEach(
    item => {
        console.log(item)
    }
)