function convertLength(value: number, from: string, to: string): number {
  const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const fromIndex: number = units.indexOf(from);
  const toIndex: number = units.indexOf(to);
  const diff: number = toIndex - fromIndex;
  return value * 10 ** diff;
}

console.log(convertLength(170, 'cm', 'm'));

// IMPLEMENTAÇÃO INEFICIENTE
// function convertLength(value: number, from: string, to: string): number | undefined { 
//   switch(from) {
//     case 'km':
//       switch(to) {
//         case 'km': return value;
//         case 'hm': return value * 10;
//         case 'dam': return value * 100;
//         case 'm': return value * 1000;
//         case 'dm': return value * 10000;
//         case 'cm': return value * 100000;
//         case 'mm': return value * 1000000;
//       }
//     case 'hm':
//       switch(to) {
//         case 'km': return value / 10;
//         case 'hm': return value;
//         case 'dam': return value * 10;
//         case 'm': return value * 100;
//         case 'dm': return value * 1000;
//         case 'cm': return value * 10000;
//         case 'mm': return value * 100000;
//       }
//     case 'dam':
//       switch(to) {
//         case 'km': return value / 100;
//         case 'hm': return value / 10;
//         case 'dam': return value;
//         case 'm': return value * 10;
//         case 'dm': return value * 100;
//         case 'cm': return value * 1000;
//         case 'mm': return value * 10000;
//       }
//     case 'm':
//       switch(to) {
//         case 'km': return value / 1000;
//         case 'hm': return value / 100;
//         case 'dam': return value / 10;
//         case 'm': return value;
//         case 'dm': return value * 10;
//         case 'cm': return value * 100;
//         case 'mm': return value * 1000;
//       }
//     case 'dm':
//       switch(to) {
//         case 'km': return value / 10000;
//         case 'hm': return value / 1000;
//         case 'dam': return value / 100;
//         case 'm': return value / 10;
//         case 'dm': return value;
//         case 'cm': return value * 10;
//         case 'mm': return value * 100;
//       }
//     case 'cm':
//       switch(to) {
//         case 'km': return value / 100000;
//         case 'hm': return value / 10000;
//         case 'dam': return value / 1000;
//         case 'm': return value / 100;
//         case 'dm': return value / 10;
//         case 'cm': return value;
//         case 'mm': return value * 10;
//       }
//     case 'mm':
//       switch(to) {
//         case 'km': return value / 1000000;
//         case 'hm': return value / 100000;
//         case 'dam': return value / 10000;
//         case 'm': return value / 1000;
//         case 'dm': return value / 100;
//         case 'cm': return value / 10;
//         case 'mm': return value;
//       }
//   }
// }