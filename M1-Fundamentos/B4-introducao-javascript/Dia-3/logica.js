//1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Crie um algoritmo que retorne o fatorial de 10
const valor = 10;
let resultado = 1;
for (let i = 10; i > 0; i -= 1) {
    resultado *= i;
}
console.log(resultado);

//2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
let word = 'Oi, eu sou o Goku!';
let invertedWord = '';
for (let i = word.length - 1; i >= 0; i -= 1) {
    invertedWord += word[i];
}
console.log(invertedWord);

//3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = 0;
let maior = 0;
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior) {
        maior = array[i].length;
    }
    if (i === 0) {
        menor = array[i].length;
    } else {
        if (array[i].length < menor) {
            menor = array[i].length;
        }
    }
}
console.log(maior);
console.log(menor);

//4 -  Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let maiorPrimo;
for (let index = 2; index <= 50; index += 1) {
    let divisiveis = 0;
    for (let secondIndex = 1; secondIndex <= index; secondIndex += 1) {
        if(index % secondIndex === 0) {
            divisiveis += 1;
        }
    }
    if (divisiveis === 2) {
        maiorPrimo = index;
    }
}
console.log(maiorPrimo);