//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(palavra) {
    let invertido = "";
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        invertido += palavra[index];
    }
    if (palavra === invertido) {
        return true;
    } else {
        return false;
    }
}

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function encontraMaiorValor(arr) {
    let indice;
    let maior = 0;
    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] > maior) {
            maior = arr[index];
            indice = index;
        }
    }
    return indice;
}

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function encontraMenorValor(arr) {
    let indice = 0;
    let menor = arr[0];
    for (let index = 1; index < arr.length; index += 1) {
        if (arr[index] < menor) {
            menor = arr[index];
            indice = index;
        }
    }
    return indice;
}

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function contaMaisRepetidos(arr){
    let mostRepeatedCount = 0;
    let mostRepeatedValue;
    let repeated = 0;
    let repeatedValue;
    for (let item of arr) {
      for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
          repeated += 1;
          repeatedValue = arr[i];
        }
      }
      if (repeated > mostRepeatedCount) {
        mostRepeatedCount = repeated;
        mostRepeatedValue = repeatedValue;
        repeated = 0;
      } else {
        repeated = 0;
      }
    }
    return mostRepeatedValue;
}

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somaNumerosNaturais(numero) {
    if (numero >= 0) {
        let soma = 0;
        for (let i = 0; i <= numero; i += 1) {
            soma += i;
        }
        return soma;
    }
    return 0;
}

function verificaFimPalavra(word, ending) {
    return word.endsWith(ending);
}

console.log(verificaFimPalavra("joaofernando", "fernan"));