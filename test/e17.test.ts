import { describe, expect, it } from 'vitest';
import { doesArrayInclude } from '../exercises/e17';

describe('isArrayIncludes', () => {
  const paramsOne = {
    arr: ['c', 'd', 'f', 'h', 'i', 'z', 'v'],
    value: 'v',
  };
  const paramsTwo = {
    arr: ['c', 'd', 'f', 'h', 'i', 'z', 'v'],
    value: 't',
  };
  const paramsThree = {
    arr: [1, 2, 3, 'h', 'i', 'z', 'v'],
    value: 2,
  };
  const paramsFour = {
    arr: [1, 2, 3, 'h', 'i', 'z', 'v'],
    value: 5,
  };

  const paramsFive = {
    arr: [1, 2, 3, 'h', 'i', 'z', 'v'],
    value: 'f',
  };

  it('Should exist', () => {
    expect(doesArrayInclude).toBeInstanceOf(Function);
  });

  it('Should return true if a symbol is included', () => {
    expect(doesArrayInclude(paramsOne)).toEqual(true);
  });

  it('Should return false if a symbol is NOT included', () => {
    expect(doesArrayInclude(paramsTwo)).toEqual(false);
  });

  it('Should return true for a number value that exists in the mixed type array', () => {
    expect(doesArrayInclude(paramsThree)).toEqual(true);
  });

  it("Should return false for a number value that doesn't exist in the mixed type array", () => {
    expect(doesArrayInclude(paramsFour)).toEqual(false);
  });

  it("Should return false for a letter that doesn't exist in the mixed type array", () => {
    expect(doesArrayInclude(paramsFive)).toEqual(false);
  });
});
