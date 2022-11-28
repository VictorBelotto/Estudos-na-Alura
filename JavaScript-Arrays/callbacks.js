 const nomes = ["Victor", "Ellen", "Mateus"];

/* nomes.forEach((nome)=>{
    console.log(nome);
})  */

// poderia criar a função fora e chamar na callback

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);