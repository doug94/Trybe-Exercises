interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return (this.myNumber + myParam).toString();
  }
}

const myObject = new MyClass(5);
console.log(myObject.myNumber);
console.log(myObject.myFunc(3));