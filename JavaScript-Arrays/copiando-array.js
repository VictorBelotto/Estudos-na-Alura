const notas = [7, 7, 8, 9];

// se não for feito dessa forma, ele usara o mesmo endereço na memoria

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);