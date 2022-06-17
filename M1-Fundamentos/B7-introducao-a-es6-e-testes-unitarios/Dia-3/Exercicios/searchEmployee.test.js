const searchEmployee = require('./searchEmployee');

describe('Busca de detalhes de funcionários através do ID', () => {
    it('Obtém os detalhes do funcionário através do seu ID e uma outra informação', () => {
        const expected = {
            id: '8579-6',
            firstName: 'Ana',
            lastName: 'Gates',
            specialities: ['UX', 'Design'],
        };
        expect(searchEmployee('8579-6', 'Ana')).toEqual(expected);
    });
    it('Retorna o erro "ID não identificada" quando o ID a ser pesquisado não existe', () => {
        expect(() => searchEmployee('1234-5', 'Doug')).toThrow('ID não identificada');
    });
    it('Retorna o erro "Informação indisponível" se a informação do 2º parâmetro não existir para o funcionário com o ID do 1º parâmetro', () => {
        expect(() => searchEmployee('8579-6', 'Bill')).toThrow('Informação indisponível');
    });
});