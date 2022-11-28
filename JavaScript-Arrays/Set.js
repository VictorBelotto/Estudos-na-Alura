//removendo elementos repetidos

const nomes = ["Victor", "Victor","Victor","Ellen","Mateus","Mateus"];

const meuSet = new Set(nomes);
// Ele retorna um Objeto
console.log(typeof meuSet);

//Vamos usar o spread operator para transformar em array e n modificar o original

const nomesAtualizados = [...meuSet]

console.log(`Os nomes atualizados são ${nomesAtualizados}`)