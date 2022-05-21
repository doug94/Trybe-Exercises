// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. 
function converteNumeroRomanoEmNatural(numeroRomano) {
    let algarismosRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
}

//  Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
function arrayOfNumbers (vector) {
    let dobro = [];
    for (let i = 0; i < vector.length; i += 1) {
        for (let j = 0; j < vector[i].length; j += 1) {
            if (vector[i][j] % 2 === 0) {
                dobro.push(vector[i][j]);
            }
        }
    }
    return dobro;
}


function objetoCestaDeFrutas(basket) {
    let elements = [];
    let organizedBasket = {};
    for (let item of basket) {
        if (!(elements.includes(item))) {
            elements.push(item);
        }
    }
    for (let element of elements) {
        let count = 0;
        for (let item of basket) {
            if (element === item) {
                count += 1;
            }
        }
        organizedBasket[element] = count;
    }
    return organizedBasket;
}

function mostraCestaDeFrutas() {
    const basket = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
        'Banana', 'Pera', 'Abacate', 'Uva',
      ];
    let obj = objetoCestaDeFrutas(basket);
    let str = "Sua cesta possui: ";
    for (let fruit in obj) {
        str += obj[fruit] + " " + fruit + "s, ";
    }
    return str.slice(0, str.length - 2);
}

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};

for (let registro in moradores) {
    if (registro === "blocoDois") {
        console.log("O morador do bloco 2 de nome " + moradores[registro][1].nome + " " + moradores[registro][1].sobrenome + " mora no " + moradores[registro][1].andar + "º andar, apartamento " + moradores[registro][1].apartamento);
    }
    // console.log(moradores[registro][1].nome);
}

for (let blocos in moradores) {
    for (let i = 0; i < blocos.length; i += 1) {
        console.log(moradores[blocos][i].nome + moradores[blocos][i].sobrenome);
    }
}