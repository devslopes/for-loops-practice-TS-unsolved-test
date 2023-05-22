import { describe, expect, it } from 'vitest';
import { flatArrays } from '../exercises/e16';
import { flatArraysData } from '../data/data';

describe('flatArrays', () => {
  const arrOne = [['d', 'r'], 'z', 'b', ['f', 'y']];
  const arrTwo = [[1, 2, 3], 'a', ['b', 'c'], 5];
  const arrThree = [[1, 'a', 3], 'b', ['c', 2], 5];
  it('Should exist', () => {
    expect(flatArrays).toBeInstanceOf(Function);
  });
  it('Should return an array of overall length of two arrays', () => {
    expect(flatArrays(flatArraysData).length).toEqual(
      flatArraysData.flat().length
    );
  });
  it('Should return an array that gives specific items when flattened', () => {
    expect(flatArrays(arrOne)).toEqual(['d', 'r', 'z', 'b', 'f', 'y']);
  });
  it('Should return an array that gives specific string when joined', () => {
    expect(flatArrays(flatArraysData).join(' ')).toEqual(
      'Yay ! this works as expected !'
    );
  });
  it('Should return an array that gives specific items of different types when flattened', () => {
    expect(flatArrays(arrTwo)).toEqual([1, 2, 3, 'a', 'b', 'c', 5]);
  });
  it('Should return an array that gives specific items of different items types of arrays when flattened', () => {
    expect(flatArrays(arrThree)).toEqual([1, 'a', 3, 'b', 'c', 2, 5]);
  });
});
