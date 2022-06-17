function techList(techArray, person) {
    if (techArray.length === 0) {
      return "Vazio!"
    } else {
      let result = [];
      let auxArray = techArray;
      auxArray.sort();
      for (let item of auxArray) {
        result.push({
          tech: item,
          name: person
        })
      }
      return result;
    }
  }

module.exports = techList;