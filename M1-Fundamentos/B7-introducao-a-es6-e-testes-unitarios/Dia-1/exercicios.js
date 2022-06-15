const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // Isso aqui agora vai dar erro. console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

testingScope(true);

function sortNumberedArray() {
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    oddsAndEvens.sort((a, b) => a - b)
    console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉
}

sortNumberedArray();

function fatorial(num) {
    let result = 1;
    for (let index = num; index > 0; index -= 1) {
        result *= index;
    }
    return result;
}

console.log(fatorial(5));

function longestWord(sentence) {
    let str = "";
    let result = "";
    for (let char of sentence) {
        if (char !== " ") {
            str += char;
        } else {
            if (str.length > result.length) {
                result = str;
            }
            str = "";
        }
    }
    if (str.length > result.length) {
        result = str;
    }
    return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

const replaceWildCard = (str) => {return `Tryber ${str} aqui`;}

const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'ES6'];
for (let skill of skills) {
    console.log(replaceWildCard(skill));
}