function convertCapacity(value: number, from: string, to: string): number {
  const units: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
  const fromIndex: number = units.indexOf(from);
  const toIndex: number = units.indexOf(to);
  const diff: number = toIndex - fromIndex;
  return value * 10 ** diff;
}

console.log(convertCapacity(150, 'ml', 'l'));