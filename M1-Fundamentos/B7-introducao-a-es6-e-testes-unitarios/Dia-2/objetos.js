function addEntry (obj, key, value) {
    obj[key] = value;
    return obj;
}

const algo = {};
addEntry(algo, "Modulo Atual", "Fundamentos");
addEntry(algo, "Bloco Atual", 7);
console.log(algo);

const student = {
    Html: "Muito bom",
    Css: "Ruim",
    JavaScript: "Otimo",
    Softskills: "Bom",
    Git: "Bom"
}

for (let skill of Object.keys(student)) {
    console.log(`${skill}, Nível: ${student[skill]}`);
}