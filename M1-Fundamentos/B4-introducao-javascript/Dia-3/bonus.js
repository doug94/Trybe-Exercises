//1 - Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
const n = 7;
let c = '';
if (n > 1) {
    for (let i = 0; i < n; i += 1) {
        c += '*';
    }
    for (let line of c) {
        console.log(c);
    }
}


//2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo. 
let aux = [];
for (let i = c.length - 1; i >= 0; i -= 1) {
    aux.push(c.slice(i));
}
for (let line of aux) {
    console.log(line);
}


//3 - Agora inverta o lado do triângulo.
for (let i = aux.length - 1; i >= 0; i -= 1) {
    console.log(" ".repeat(i) + aux[aux.length - i - 1]);
}


//4 - Depois, faça uma pirâmide com n asteriscos de base:
for (let i = aux.length - 1; i >= 0; i -= 2) {
    console.log(" ".repeat(i / 2) + aux[aux.length - i - 1] + " ".repeat(i / 2));
}

//5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
