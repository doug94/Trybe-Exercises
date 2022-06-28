// const { expect } = require('expect');
// const { it } = require('jest-circus');
const { flatten, reduceNames, averageAge, longestNamedBook, containsA, studentAverage } = require('./exercicios.js');

describe('Testing reduce HOF on different functions', () => {
    it('A matrix is flattened into a single array', () => {
        expect(flatten()).toEqual(['1', '2', '3', true, 4, 5, 6]);
    });
    it('All authors are on a single string', () => {
        const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
        expect(reduceNames()).toBe(expectedResult);
    });
    it('The average age of authors when their books were released', () => {
        expect(averageAge()).toBe(43);
    });
    it('It returns the object containing the book with the longest name', () => {
        const expectedResult = {
            id: 1,
            name: 'As Crônicas de Gelo e Fogo',
            genre: 'Fantasia',
            author: {
              name: 'George R. R. Martin',
              birthYear: 1948,
            },
            releaseYear: 1991,
          };
          expect(longestNamedBook()).toEqual(expectedResult);
    });
    it('Case insensitive function witch returns how much of character "a" exists within an array of strings', () => {
        expect(containsA()).toBe(20);
    })
    it('It returns an object out of two arrays with each student name mapped to each grade average', () => {
        const expected = [
            { name: 'Pedro Henrique', average: 7.8 },
            { name: 'Miguel', average: 9.2 },
            { name: 'Maria Clara', average: 8.8 },
          ];
          expect(studentAverage()).toEqual(expected);
    });
});