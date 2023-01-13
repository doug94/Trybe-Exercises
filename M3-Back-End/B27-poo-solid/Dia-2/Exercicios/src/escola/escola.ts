class Disciplina {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  obterSomaDeTodasNotas() {
    return this._notasProva.reduce((acc, cur) => acc + cur, 0) + 
      this._notasTrabalho.reduce((acc, cur) => acc + cur, 0);
  }

  obterMediaDeTodasNotas() {
    return this._notasProva.reduce((acc, cur) => acc + cur, 0) + 
      this._notasTrabalho.reduce((acc, cur) => acc + cur, 0) / 
      (this._notasProva.length + this._notasTrabalho.length);
  }
}

const matematica = new Disciplina('1234', 'Douglas', [8, 7, 9, 6], [10, 8]);
console.log(matematica.obterMediaDeTodasNotas());
console.log(matematica.obterSomaDeTodasNotas());