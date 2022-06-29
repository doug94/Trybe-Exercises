const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
});

const sum = (...values) => values.reduce((result, curValue) => result += curValue, 0);
console.log(sum(1, 2, 3, 4, 5));

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
];
  
  // escreva filterPeople abaixo
const filterPeople = () => people.filter(({bornIn, nationality}) => nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2000);
console.log(filterPeople());

const myList = [1, 2, 3];
const swapList = ([primeiro, meio, ultimo]) => [ultimo, meio, primeiro];
console.log(swapList(myList));

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(...cars) {
    let obj = {};
    cars.forEach((car, index) => {
        [model, vendor, year] = car;
        obj[`car${index + 1}`] = {
            model,
            vendor,
            year
        }
    });
    return obj;
}

console.log(toObject(palio, shelbyCobra, chiron));

// const toObject = (...cars) => cars.map((car) => {
//     [model, vendor, year] = car
//     return {
//         model,
//         vendor,
//         year
//     }
// }); Essa solução comentada retorna um array de objetos. A solução implementada retorna um objeto com outros objetos

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo

  const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;
  
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
console.log(months);