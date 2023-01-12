class Superclass {
  constructor(public isSuper: boolean = true) {}

  sayHello() {
    console.log('Olá Mundo');
  }

}

class Subclass extends Superclass {}

function myFunc(obj: Superclass) {
  obj.sayHello();
}

const original = new Superclass();
const inherited = new Subclass();
myFunc(original);
myFunc(inherited);

