//Criar uma lista *Produto com 3 objetos
//- código do produtos
//- nome do produto
//- preço do produto

const produtos = [
    {
        codigo: "001",
        nome: "Notebook",
        preco: "3000.99"
    },
    {
        codigo: "002",
        nome: "Monitor",
        preco: "1299.99"
    },
    {
        codigo: "003",
        nome: "Mouse gamer",
        preco: "300.00"
    }
]

let todosProdutos = produtos.map(
    (p) => 
        "Código do produto: " + p.codigo +
        "\nProduto: " + p.nome +
        "\nPreço: R$ " + p.preco 
)

todosProdutos.forEach(
    item => {
        console.log(item)
    }
)