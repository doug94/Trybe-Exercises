const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addNoiteLesson2(obj, chave, valor) {
    obj[chave] = valor;
  }

  addNoiteLesson2(lesson2, "turno", "noite");
  console.table(lesson2);

  const listKeys = (obj) => Object.keys(obj);
  console.log(listKeys(lesson1));

  const objSize = (obj) => Object.keys(obj).length;
  console.log(objSize(lesson3));

  const listValues = (obj) => Object.values(obj);
  console.log(listValues(lesson2));

  const allLessons = {}
  allLessons.lesson1 = Object.assign({}, lesson1);
  allLessons.lesson2 = Object.assign({}, lesson2);
  allLessons.lesson3 = Object.assign({}, lesson3);
  console.table(allLessons);
  console.log(allLessons);

  const returnAmountOfStudents = () => `${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`;
  console.log(returnAmountOfStudents());

  const getValueByNumber = (obj, index) => obj[Object.keys(obj)[index]];

  console.log(getValueByNumber(lesson1, 0));

  const verifyPair = (obj, chave, valor) => obj[chave] === valor ? true : false;

  console.log(verifyPair(lesson3, 'turno', 'noite'));

  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
