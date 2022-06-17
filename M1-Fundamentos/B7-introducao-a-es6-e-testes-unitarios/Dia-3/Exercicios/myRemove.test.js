const myRemove = require('./myRemove');

describe('removing an item from a given array', () => {
    it('given an array with items [1, 2, 3, 4] and 3 as the 2nd parameter, it returns a new array with values [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.arrayContaining([1, 2, 4]));
    });
    it(`given an array with items [1, 2, 3, 4] and 3 as the 2nd parameter, it doesn't return an array with values [1, 2, 3, 4]`, () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(expect.arrayContaining([1, 2, 3, 4]));
    })
    it('given an array with items [1, 2, 3, 4] and 5 as the 2nd parameter, it returns an array with values [1, 2, 3, 4 ]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    })
});