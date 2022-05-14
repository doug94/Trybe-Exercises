//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para adição, subtração, multiplicação, divisão e módulo
const a = 4;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const c = 3;
if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}

//4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if (a >= 0) {
    console.log("positive");
}
else {
    console.log("negative");
}

//5 -  Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloA = 40;
const anguloB = 60;
const anguloC = 80;
if (anguloA < 0 || anguloB < 0 || anguloC < 0){
    console.log("Um ou mais ângulos é inválido");
}
else if(anguloA + anguloB + anguloC === 180) {
    console.log(true);
}
else {
    console.log(false);
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const peca = "rei";
switch (peca) {
    case "Rei".toLowerCase():
        console.log("Vertical", "Horizontal", "Diagonal", "Uma casa por vez");
        break;

    case "Rainha".toLowerCase():
        console.log("Vertical, Horizontal", "Diagonal", "Quantas casas desejar");
        break;

    case "Bispo".toLowerCase():
        console.log("Diagonal", "Quantas casas desejar");
        break;

    case "Cavalo".toLowerCase():
        console.log("Movimento em L", "Duas casas horizontais e uma vertical, ou uma casa horizontal e duas verticais");
        break;

    case "Torre".toLowerCase():
        console.log("Vertical", "Horizontal", "Quantas casas desejar");
        break;

    case "Peão".toLowerCase():
        console.log("Vertical", "Uma casa por vez", "Apenas para frente");
        break;

    default:
        console.log("Peça inválida");
        break;
}

//7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 83;
switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("A");
        break;
    
    case (nota >= 80 && nota < 90):
        console.log("B");
        break;

    case (nota >= 70 && nota < 80):
        console.log("C");
        break;

    case (nota >= 60 && nota < 70):
        console.log("D");
        break;

    case (nota >= 50 && nota < 60):
        console.log("E");
        break;

    case (nota >= 0 && nota < 50):
        console.log("F");
        break;

    default:
        console.log("Nota inválida");
        break;
}


//8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const n1 = 4;
const n2 = 3;
const n3 = 2;
if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

//9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
if(n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1) {
    console.log(true);
}
else {
    console.log(false);
}

//10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custo = 500;
const valor = 1000;
let lucro = 0;
if (custo < 0 || valor < 0) {
    console.log("Valor ou custo inválido!");
}
else {
    const imposto = custo * 0.2;
    const custoTotal = custo + imposto;
    lucro = valor - custoTotal;
    console.log(lucro);
}

//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salarioBruto = 15000;
let salarioBase;
let salarioLiquido;
let inss;
let ir;
let deducao;
if (salarioBruto <= 1556.94) {
    inss = 0.08;
} 
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = 0.11;
}
else if (salarioBruto > 5189.92) {
    inss = 570.88;
}
if (inss === 570.88) {
    salarioBase = salarioBruto - inss;
}
else {
    salarioBase = salarioBruto - (salarioBruto * inss);
}
if (salarioBase <= 1903.98) {
    ir = 0;
    deducao = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.55) {
    ir = 0.075;
    deducao = 142.80;
}
else if (salarioBase >= 2826.56 && salarioBase <= 3751.05) {
    ir = 0.15;
    deducao = 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = 0.225;
    deducao = 636.13;
}
else if (salarioBase > 4664.68) {
    ir = 0.275;
    deducao = 869.36;
}
if (ir != 0) {
    salarioLiquido = salarioBase - (salarioBase * ir) + deducao;
}
else {
    salarioLiquido = salarioBase;
}
console.log(salarioBase);
console.log(salarioLiquido);