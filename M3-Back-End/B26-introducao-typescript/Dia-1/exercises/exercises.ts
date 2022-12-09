export const getSquareArea = (side: number): number => side ** 2;

export const getRectangleArea = (base: number, height: number): number => base * height;

export const getTriangleArea = (base: number, height: number): number => (base * height) / 2;

export const getPolygonPerimeter = (sides: number[]): number => sides.reduce(
  (acc, side) => acc + side, 0
);

export const triangleCheck = (sideA: number, sideB: number, sideC: number): boolean => {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
};

export const getDiamondArea = (bigger: number, smaller: number): number => (bigger * smaller) / 2;

export const getTrapeziumArea = (biggerBase: number, smallerBase: number, height: number): number => (
  ((biggerBase + smallerBase) * height) / 2
);

export const getCircleArea = (radius: number): number => Math.PI * (radius ** 2);