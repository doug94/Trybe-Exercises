class Superclass {
  constructor(public isSuper: boolean = true) { }

  sayHello() {
    console.log('Olá Mundo');
  }

}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

function myFunc(obj: Superclass) {
  obj.sayHello();
  obj.isSuper ? console.log('Super!') : console.log('Sub!');
}

const original = new Superclass();
const inherited = new Subclass();
myFunc(original);
myFunc(inherited);

