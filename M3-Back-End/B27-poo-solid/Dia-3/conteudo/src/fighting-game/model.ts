import { Character, db, DbCharacter } from "./character";

export interface IModel {
  create(param: Character): void;
  read(param?: Character): Character[];
  update(param: Character): void;
  delete(param: Character): void;
}

export class LocalDbModel implements IModel {
  create(param: DbCharacter) {
    db.push(param);
  }

  read(param?: DbCharacter) {
    if (!param) return db;
    else return db.filter((item) => item.id === param.id);
  }

  update(param: DbCharacter) {
    const toBeUpdated = db.find((item) => item.id === param.id);
    if (toBeUpdated) db[db.indexOf(toBeUpdated)] = param;
  }

  delete(param: DbCharacter) {
    const toBeDeleted = db.find((item) => item.id === param.id);
    if (toBeDeleted) db.splice(db.indexOf(toBeDeleted), 1);
  }
}

export class MockedDbModel implements IModel {
  create(param: Character) {
    console.log(`Character ${param.name} has been inserted into the Database`);
  }

  read(param?: Character) {
    return db;
  }

  update(param: Character) {
    console.log(`Character ${param.name} has been updated in the database`);
  }

  delete(param: Character) {
    console.log(`Character ${param.name} has been deleted from the database`);
  }
}