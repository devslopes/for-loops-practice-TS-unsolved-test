import { describe, expect, it } from 'vitest';
import { concatArrays } from '../exercises/e15';

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

describe('concatArrays', () => {
  it('Should exist', () => {
    expect(concatArrays).toBeInstanceOf(Function);
  });
  it('Should return an array of overall length of two arrays lengths', () => {
    expect(concatArrays(arr1, arr2).length).toEqual(arr1.length + arr2.length);
  });
  it('Should return an array of concatenated elements of two arrays', () => {
    expect(concatArrays(arr1, arr2)).toEqual([...arr1, ...arr2]);
  });
});
