import { describe, expect, it } from 'vitest';
import { getNumbersWithSquareRoots } from '../exercises/e2';

describe('getNumbersWithSquareRoots', () => {
  it('Should exist', () => {
    expect(getNumbersWithSquareRoots).toBeInstanceOf(Function);
  });
  it('If N = 50 then should return an exact array of 8 numbers', () => {
    expect(getNumbersWithSquareRoots(50)).toEqual([0, 1, 4, 9, 16, 25, 36, 49]);
  });

  it('If N = 200 then should return an exact array of 15 numbers', () => {
    expect(getNumbersWithSquareRoots(200)).toEqual([
      0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196,
    ]);
  });
});
