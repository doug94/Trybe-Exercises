import Person from "./person";
const { createHash } = await import('crypto');

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(name: string, birthDate: Date, examsGrades: number[], assignmentsGrades: number[]) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    if (examsGrades.length <= 4) this._examsGrades = examsGrades;
    if (assignmentsGrades.length <= 2) this._assignmentsGrades = assignmentsGrades;
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    if (grades.length <= 4) this._examsGrades = grades;
  }

  get assignmentsGrades() {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(grades: number[]) {
    if (grades.length < 2) this._assignmentsGrades = grades;
  }

  private generateEnrollment() {
    const hash = createHash('sha256');
    hash.update(this.name);
    return hash.digest('hex');
  }
}

const student = new Student('Douglas', new Date('July 12 1994'), [8, 6, 5], [7, 9]);
console.log(student.name);