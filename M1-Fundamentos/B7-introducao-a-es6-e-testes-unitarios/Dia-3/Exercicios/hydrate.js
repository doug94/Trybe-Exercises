function hydrate(drinks) {
    let waterCups = 0;
    let drinksCount = drinks.match(/(\d+)/g);
    for (let count of drinksCount) {
      waterCups += Number(count);
    }
    if (waterCups === 1) {
      return waterCups + " copo de água";
    } else {
      return waterCups + " copos de água";
    }
  }

module.exports = hydrate;