import { describe, expect, it } from 'vitest';
import { joinToString } from '../exercises/e18';

describe('isArrayIncludes', () => {
  const paramsOne = {
    arr: ['a', 'b', 'c', 'd'],
    separator: '-',
  };
  const paramsTwo = {
    arr: [
      'Devslopes',
      'is',
      'teaching',
      'me',
      'FOR',
      'loops',
      'and',
      'functions',
      '!',
    ],
    separator: ' ',
  };
  it('Should exist', () => {
    expect(joinToString).toBeInstanceOf(Function);
  });
  it('Should return a correct string with symbols of separator between array items values only', () => {
    expect(joinToString(paramsTwo)).toEqual(
      'Devslopes is teaching me FOR loops and functions !'
    );
  });
  it("Should return a string of 'a-b-c-d' if the ['a', 'b', 'c', 'd'] array was passed", () => {
    expect(joinToString(paramsOne)).toEqual('a-b-c-d');
  });
});
