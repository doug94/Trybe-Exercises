const codec = require('./encodeAndDecode');

describe('turning vowels into numbers', () => {
    it('function encode is indeed a function', () => {
        expect(codec.encode).toBeInstanceOf(Function);
    });
    it('it turns "a", "e", "i", "o" and "u" into "1", "2", "3", "4" and "5" respectively', () => {
        expect(codec.encode('doremifasollasicu')).toBe('d4r2m3f1s4ll1s3c5');
    });
    it('consonants are left untouched', () => {
        expect(codec.encode('SPRJMGRSBA')).toBe('SPRJMGRSBA');
    })
    it('output has the same length as input', () => {
        const str = 'huehuebr'
        expect(codec.encode(str).length).toBe(str.length);
    })
});

describe('turning numbers into vowels', () => {
    it('function decode is indeed a function', () => {
        expect(codec.decode).toBeInstanceOf(Function);
    });
    it('it turns "1", "2", "3", "4" and "5" into "a", "e", "i", "o" and "u" respectively', () => {
        expect(codec.decode('d4r2m3f1s4ll1s3c5')).toBe('doremifasollasicu');
    });
    it('encoded characters greater than 5 are left untouched', () => {
        expect(codec.decode("476")).toBe('o76');
    })
    it('output has the same length as input', () => {
        expect(codec.decode('4321').length).toBe('4321'.length);
    })
});