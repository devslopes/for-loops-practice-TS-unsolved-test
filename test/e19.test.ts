import { describe, expect, it } from 'vitest';
import { reverseArray } from '../exercises/e19';

describe('reverseArray', () => {
  const arrOne = [1, 2, 3, 4];
  const arrTwo = [1, 'a', 3, 4, 'b', 5];
  it('Should exist', () => {
    expect(reverseArray).toBeInstanceOf(Function);
  });
  it('The length of the returned array must be equal to the length of the initial array.', () => {
    expect(reverseArray(arrOne).length).toEqual(arrOne.length);
  });
  it('Should return a reversed array value from the array of numbers', () => {
    expect(reverseArray(arrOne)).toEqual(arrOne.reverse());
  });
  it('Should return a reversed array value from the array of numbers and strings', () => {
    expect(reverseArray(arrTwo)).toEqual(arrTwo.reverse());
  });
});
