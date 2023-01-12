import { ConsoleLogger, ConsoleLogger2 } from "./logger";
import { ExampleDatabase } from "./database";

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('Hello', 'World');
db2.save('Hello', 'World');
db3.save('Hello', 'World');
