import { Logger, ConsoleLogger } from "./logger";

export interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

export class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string) {
    this.logger.log(`${key} ${value}`);
  }
}