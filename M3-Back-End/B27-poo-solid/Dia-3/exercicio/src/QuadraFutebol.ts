import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    return {
      protocolo: 'hiuehfufuien',
      data: data,
      regras: { chuteira: 'cravo' }
    };
  }
}
