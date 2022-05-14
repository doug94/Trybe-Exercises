// Variáveis e constantes

const myName = "Douglas";
const birthCity = "Guaíba";
let birthYear = 1994;
console.log(myName);
console.log(birthCity);
console.log(birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = "Eldorado do Sul"; // Vai dar erro aqui pq constantes não podem ter seus valores alterados
console.log(birthCity);

//Tipos primitivos

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

// Operações Aritméticas

const base = 5;
let height = 8;
const area = base * height;
const perimeter = base + height;
console.log(area);
console.log(perimeter);

// Operadores condicionais

const nota = 55;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)");
}
else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}

// Operador AND

const currentHour = 19;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo para o café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

// Operador OR

let weekDay = "quinta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanço merecido UwU");
}

// Operador switch e case

let estado = "aprovada";
switch (estado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Não se aplica");
}