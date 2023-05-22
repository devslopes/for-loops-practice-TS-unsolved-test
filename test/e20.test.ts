import { describe, expect, it } from 'vitest';
import { separateNamesWithAFromRest } from '../exercises/e20';
import { classSeatsFlattened } from '../data/data';

describe('separateNamesWithAFromRest', () => {
  it('Should exist', () => {
    expect(separateNamesWithAFromRest).toBeInstanceOf(Function);
  });
  it('The length of the flattened returned array must be equal to length of the initial array.', () => {
    const result = separateNamesWithAFromRest(classSeatsFlattened);
    expect(result.flat().length).toEqual(classSeatsFlattened.length);
  });
  it('The length of the returned array must be 2', () => {
    const result = separateNamesWithAFromRest(classSeatsFlattened);
    expect(result.length).toEqual(2);
  });
  it('Should return a specific array of 2 arrays when the classSeatsFlattened array was passed', () => {
    expect(separateNamesWithAFromRest(classSeatsFlattened)).toEqual([
      [
        'Emma',
        'Sophia',
        'William',
        'Elijah',
        'James',
        'Lucas',
        'Mason',
        'Mia',
        'Liam',
        'Noah',
        'Ethan',
        'Harper',
      ],
      ['Ben', 'Oliver', 'Evelyn'],
    ]);
  });
});
