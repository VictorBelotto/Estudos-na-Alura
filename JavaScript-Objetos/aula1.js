const cliente = {
    nome: "Victor",
    idade: 20,
    cpf: "123123123",
    email: "victor@victor.com"
};


console.log(
    `O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`
)

console.log(`Os 3 primeiros digitos do CPF são: ${cliente.cpf.substring(0, 3)}`)


// da para acessar com [] tambem

console.log("acessando propriedade cpf com colchetes : " + cliente["cpf"])

// --------

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})