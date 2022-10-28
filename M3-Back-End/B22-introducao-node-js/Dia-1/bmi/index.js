const { getBmi, getCategory } = require('./bmi');
const readline = require('readline-sync');

function main() {
  const weight = readline.questionFloat(`What's your weight? `);
  const height = readline.questionFloat(`What's your height? `);
  console.log(`Your BMI is ${getBmi(weight, height)}`);
  console.log(getCategory(getBmi(weight, height)));
}

main();