const employees = {};

const newEmployees = (employeeRecord, nome, sobrenome) => {
    employees[`id${Object.entries(employees).length + 1}`] = employeeRecord(nome, sobrenome);
    return employees;
  };

const employeeRecord = (nome, sobrenome) => ({ nomeCompleto: `${nome} ${sobrenome}`, email: `${nome}_${sobrenome}@trybe.com`})

console.table(newEmployees(employeeRecord, 'Pedro', 'Guerra'));
console.table(newEmployees(employeeRecord, 'Luiza', 'Drumond'));
console.table(newEmployees(employeeRecord, 'Carla', 'Paiva'));
console.table(newEmployees(employeeRecord, 'Douglas', 'Alves'));

const sorteio = (apostado, verificaSorteio) => {
    const sorteado = parseInt((Math.random() * 5) + 1);
    if (verificaSorteio(apostado, sorteado)) return 'Parabéns, você ganhou';
    return 'Tente novamente';
}

const verificaSorteio = (apostado, sorteado) => apostado === sorteado;

console.log(sorteio(3, verificaSorteio));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabarito = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers) => `A nota do aluno é ${checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS)}`

const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let score = 0;
    for (let index = 0; index <= RIGHT_ANSWERS.length; index += 1) {
        if (STUDENT_ANSWERS[index] !== 'N.A') {
            if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
                score += 1;
            } else {
                score -= 0.5;
            }
        }
    }
    return score;
}

console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));