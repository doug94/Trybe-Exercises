export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    if (this.isNameValid(name)) this._name = name;
    if (this.isDateValid(birthDate)) this._birthDate = birthDate;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (this.isNameValid(name)) this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    if (this.isDateValid(birthDate)) this._birthDate = birthDate;
  }

  private isNameValid(name: string) {
    return name.length >= 3
  }

  private isDateValid(date: Date) {
    return (Date.now() > date.getTime()) && (new Date().getFullYear() - date.getFullYear() < 120);
  }
}