export interface Logger {
  log(input: string): void;
}

export class ConsoleLogger implements Logger {
  log(input: string) {
    console.log(input);
  }
}

export class ConsoleLogger2 implements Logger {
  log(input: string) {
    console.log(`Console Logger 2.0 presents: ${input}`);
  }
}