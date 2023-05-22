import { describe, it, expect } from 'vitest';
import { getFirstTenNumbers } from '../exercises/e1';

describe('getFirstTenNumbers', () => {
  it('Should exist', () => {
    expect(getFirstTenNumbers).toBeInstanceOf(Function);
  });
  it('Should return an array with length of 10', () => {
    expect(getFirstTenNumbers().length).toEqual(10);
  });
  it('Should return an exact array of 10 numbers', () => {
    expect(getFirstTenNumbers()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
