const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten() {
    return arrays.reduce((flatArray, curArray) => flatArray.concat(curArray));
}

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];

function reduceNames() {
    return books.reduce((str, cur, index) => (index < books.length - 1) ? `${str += cur.author.name}, ` : `${str += cur.author.name}.`, '');
}

function averageAge() {
  return books.reduce((avg, cur) => avg += cur.releaseYear - cur.author.birthYear, 0) / books.length;
}

function longestNamedBook() {
  return books.reduce((str, cur) => (cur.name.length > str.name.length) ? str = cur : str);
}

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((count, name) => count += name.split('').filter((char) => char.toLowerCase() === 'a').length, 0)
}

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => ({name: student, average: grades[index].reduce((avg, cur) => avg += cur) / grades[index].length}))
}

module.exports = { flatten, reduceNames, averageAge, longestNamedBook, containsA, studentAverage };