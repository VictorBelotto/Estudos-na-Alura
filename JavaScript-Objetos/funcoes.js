const cliente = {
    nome: "Victor",
    idade: 20,
    email: "victor@victor.com",
    telefone: [123213, 745745],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Seu novo saldo : ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(50)