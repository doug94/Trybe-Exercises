export default class ItemPedido {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome() {
    return this._nome;
  }

  get preco() {
    return this._preco;
  }
}