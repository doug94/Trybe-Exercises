function encode(phrase) {
    let codedPhrase = phrase;
    for (let i = 0; i < codedPhrase.length; i += 1) {
        switch (codedPhrase[i]) {
            case 'a':
                codedPhrase = codedPhrase.replace('a', '1');
                break;
            case 'e':
                codedPhrase = codedPhrase.replace('e', '2');
                break;
            case 'i':
                codedPhrase = codedPhrase.replace('i', '3');
                break;
            case 'o':
                codedPhrase = codedPhrase.replace('o', '4');
                break;
            case 'u':
                codedPhrase = codedPhrase.replace('u', '5');
        }
    }
    return codedPhrase;
}

function decode(phrase) {
    let decodedPhrase = phrase;
    for (let i = 0; i < decodedPhrase.length; i += 1) {
        switch (decodedPhrase[i]) {
            case '1':
                decodedPhrase = decodedPhrase.replace('1', 'a');
                break;
            case '2':
                decodedPhrase = decodedPhrase.replace('2', 'e');
                break;
            case '3':
                decodedPhrase = decodedPhrase.replace('3', 'i');
                break;
            case '4':
                decodedPhrase = decodedPhrase.replace('4', 'o');
                break;
            case '5':
                decodedPhrase = decodedPhrase.replace('5', 'u');
        }
    }
    return decodedPhrase;
}

module.exports = {encode, decode};