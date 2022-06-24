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

function authorBornIn1947() {
    return books.find((item) => item.author.birthYear === 1947);
}

function smallerName() {
    let nameBook = [];
    books.forEach((item) => nameBook.push(item.name));
    nameBook.sort((a, b) => a.length - b.length);
    return nameBook[0];
}

function getNamedBook() {
    return books.find((item) => item.name.length === 26);
}

function booksOrderedByReleaseYearDesc() {
    books.sort((a, b) => b.releaseYear - a.releaseYear);
}

function everyoneWasBornOnSecXX() {
    return books.every((item) => item.author.birthYear >= 1901 && item.author.birthYear <= 2000);
  }

function someBookWasReleaseOnThe80s() {
    return books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1989);
}

function authorUnique() {
    let birthYears = [];
    books.forEach((item) => birthYears.push(item.author.birthYear));
    for (let firstIndex = 0; firstIndex < birthYears.length; firstIndex += 1) {
        for (secondIndex = firstIndex; secondIndex < birthYears.length; secondIndex += 1) {
            if (birthYears[firstIndex] === birthYears[secondIndex]) {
                return false;
            }
        }
    }
    return true;
}

// booksOrderedByReleaseYearDesc();
console.log(authorUnique());