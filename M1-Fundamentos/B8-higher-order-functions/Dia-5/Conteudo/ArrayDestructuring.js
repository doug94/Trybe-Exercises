const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

[saudacao, printSaudacao] = saudacoes;
printSaudacao(saudacao);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, , , ...pares] = numerosPares;

console.log(pares); // [6, 8, 10, 12];