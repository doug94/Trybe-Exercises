// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Banana', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Iogurte', 'Linhaça'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));