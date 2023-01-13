import { IModel } from "./model";

export class CharacterService {
  constructor(private _db: IModel) {}

  get db() {
    return this._db;
  }
}