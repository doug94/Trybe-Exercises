function convertMass(value: number, from: string, to: string): number {
  const units: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
  const fromIndex: number = units.indexOf(from);
  const toIndex: number = units.indexOf(to);
  const diff: number = toIndex - fromIndex;
  return value * 10 ** diff;
}

console.log(convertMass(150, 'kg', 'mg'));