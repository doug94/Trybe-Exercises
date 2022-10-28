const getBmi = (weight, height) => weight / Math.pow(height, 2);

function getCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
  if (bmi >= 25 && bmi < 30) return 'Overweight';
  if (bmi >= 30 && bmi < 35) return 'Obesity class I';
  if (bmi >= 35 && bmi < 40) return 'Obesity class II';
  return 'Obesity class III';
}

module.exports = { getBmi, getCategory };