import Cliente from "./cliente";
import ItemPedido from "./itemPedido";
import Pedido from "./pedido";

const doug = new Cliente('Douglas');

const hamburger = new ItemPedido('Hambúrger', 25);
const refri = new ItemPedido('Refrigerante lata', 5);

const cupom = 0.05;

const pedido = new Pedido(doug, [hamburger, refri], 'Cartão', cupom);

console.log(`Valor total: ${pedido.getTotal()}`);
console.log(`Valor com desconto: ${pedido.getTotalComDesconto()}`);