import Cliente from './cliente';
import ItemPedido from './itemPedido';

export default class Pedido {
  private _cliente: Cliente;
  private _itensConsumidos: ItemPedido[];
  private _pgto: string;
  private _desconto: number;

  constructor(cliente: Cliente, items: ItemPedido[], pgto: string, desconto: number = 0) {
    this._cliente = cliente;
    this._itensConsumidos = items;
    this._pgto = pgto;
    this._desconto = desconto;
  }
  
  getTotal() {
    let soma = 0;
    this._itensConsumidos.forEach((item) => soma += item.preco);
    return soma;
  }

  getTotalComDesconto() {
    return this.getTotal() - (this.getTotal() * this._desconto);
  }
}