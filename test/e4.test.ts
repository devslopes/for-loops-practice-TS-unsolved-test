import { describe, expect, it } from 'vitest';
import { findMinValueInArray } from '../exercises/e4';
import { findMaxValueInArray } from '../exercises/e4';

describe('findMinValueInArray', () => {
  it('Should exist', () => {
    expect(findMinValueInArray).toBeInstanceOf(Function);
  });
  it('Should return a number value of 19 for the [20, 24, 19, 26] array passed', () => {
    expect(findMinValueInArray([20, 24, 19, 26])).toEqual(19);
  });
  it('MIN function should return undefined if the empty array was passed', () => {
    expect(findMinValueInArray([])).toEqual(undefined);
  });
});

describe('findMaxValueInArray', () => {
  it('Should exist', () => {
    expect(findMaxValueInArray).toBeInstanceOf(Function);
  });
  it('Should return a number value of 26 for the [20, 24, 19, 26] array passed', () => {
    expect(findMaxValueInArray([20, 24, 19, 26])).toEqual(26);
  });
  it('Should return a number value of 32 for the [20, 24, 32, 19] array passed', () => {
    expect(findMaxValueInArray([20, 24, 32, 19])).toEqual(32);
  });
  it('MAX function should return undefined if the empty array was passed', () => {
    expect(findMinValueInArray([])).toEqual(undefined);
  });
});
