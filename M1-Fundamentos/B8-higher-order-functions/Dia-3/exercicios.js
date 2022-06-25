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
  
  function formatedBookNames() {
    return books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);
  }

  function nameAndAge() {
    return books.map((item) => ({ age: item.releaseYear - item.author.birthYear, author: item.author.name})).sort((a, b) => a.age - b.age);
  }

  function fantasyOrScienceFiction() {
    return books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica');
  }

  function oldBooksOrdered() {
    return books.filter((item) => item.releaseYear < new Date().getFullYear() - 60).sort((a, b) => a.releaseYear - b.releaseYear);
  }

  function fantasyOrScienceFictionAuthors() {
    return books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica').map((item) => item.author.name).sort();
  }

  function oldBooks() {
    return oldBooksOrdered().map((item) => item.name);
  }

  function authorWith3DotsOnName() {
    return books.filter((item) => item.author.name.match(/([A-Z]\. ){3}/g)).map((item) => item.name)[0];
  }

  console.log(authorWith3DotsOnName());