const cliente = {
    nome: "Victor",
    idade: 20,
    email: "victor@victor.com",
    telefone: [123213, 745745],

}

cliente.enderecos = [
    {
        rua: "tal tal",
        numero: 12,
        apartamento: true,
        complemento: "ap 90",
     }
]
 
cliente.enderecos.push({
    rua: 'tal telll',
    numero: 112,
    apartamento: false,
})

console.log(cliente.enderecos)

const listaApartamentos = cliente.enderecos.filter(
    (endereco)=> endereco.apartamento === true
)

console.log("-----------------------------------")

console.log(listaApartamentos)