class Produto{
    constructor(nome,datadeCadastro,descricao,preco){
        this.nome = nome;
        this.datadeCadastro = datadeCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrar_produto(){
        {
        return this.nome + this.datadeCadastro + this.descricao + this.preco 
    }
}
}

class produtoDestaque extends produto{
    constructor(nome, datadeCadastro, descricao, preco, produto_destaque){
        super(nome,datadeCadastro,descricao,preco)
        this.produto_destaque = produto_destaque;
    }     
    }
    mostrar_produto_destaque(){
        return `
        <h1 class "vermelho">$ {this.nome}</h1>
        <div>${this.datadeCadastro}</div>
        <p>${this.descricao}</p>
        `
        

        //return this.nome + this.datadeCadastro + this.descricao + this.preco + this.produto_destaque;
    }
    

const produto = new ProdutoDestaque ("Tênis", "20/05/2022", "Sapato", "100,99", "tenis.jpg");
console.log(produto.mostrar_produto_destaque());

const produtoDestaque = document.getElementById("produtoDestaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrar_produto_destaque());