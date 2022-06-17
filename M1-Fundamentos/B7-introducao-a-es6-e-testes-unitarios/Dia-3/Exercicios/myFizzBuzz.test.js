const myFizzBuzz = require('./myFizzBuzz');

describe('checking fizzbuzz return based on input argument and whether it is divisible by 3, by 5, by both or by none', () => {
    it(`it returns "fizzbuzz" if argument is divisible by both 3 and 5`, () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it(`it returns "fizz" if argument is divisible by 3`, () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('it returns "buzz" if argument is divisible by 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('it returns the argument left untouched if it is not divisible by 3 nor by 5', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('it returns false if the argument is not a number', () => {
        expect(myFizzBuzz('a')).toBeFalsy();
    });
});