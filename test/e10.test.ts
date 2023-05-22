import { describe, expect, it } from 'vitest';
import { getClientsWithLetterInName } from '../exercises/e10';
import { bankAccounts } from '../data/data';

describe('getClientsWithLetterInName', () => {
  const paramsOne = {
    arr: bankAccounts,
    letter: 'a',
  };
  const paramsTwo = {
    arr: bankAccounts,
    letter: 'c',
  };
  const paramsThree = {
    arr: bankAccounts,
    letter: 's',
  };
  it('Should exist', () => {
    expect(getClientsWithLetterInName).toBeInstanceOf(Function);
  });
  it('Should return an array of 4 items if bankAccounts was passed', () => {
    expect(getClientsWithLetterInName(paramsOne).length).toEqual(4);
  });
  it("Should return an exact array of Susan, Morgan, Joshua, and Candy when bankAccounts and 'a' were passed", () => {
    expect(getClientsWithLetterInName(paramsOne)).toEqual([
      'Susan',
      'Morgan',
      'Joshua',
      'Candy',
    ]);
  });
  it("Should return an exact array of Candy when bankAccounts and 'a' were passed", () => {
    expect(getClientsWithLetterInName(paramsTwo)).toEqual(['Candy']);
  });

  it("Should return an array the has 'Susan' included only once when 's' was passed", () => {
    expect(
      getClientsWithLetterInName(paramsThree).filter((item) => item === 'Susan')
        .length
    ).toEqual(1);
  });
});
