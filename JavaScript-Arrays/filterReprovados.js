const alunos = ["Victor","Ellen","Mateus"];
const medias = [7, 4.5, 8]

const reprovados = alunos.filter((aluno, indice) =>{
    return medias[indice] < 7;
})

console.log(reprovados)