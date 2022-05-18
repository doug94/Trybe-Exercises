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

