import { describe, expect, it } from 'vitest';
import { getClientWithNoMoney } from '../exercises/e6';
import { bankAccounts, bankAccountsNoPositiveBalance } from '../data/data';

describe('getClientWithNoMoney', () => {
  it('Should exist', () => {
    expect(getClientWithNoMoney).toBeInstanceOf(Function);
  });

  it("Should return 'Candy' when the bankAccounts array was passed", () => {
    expect(getClientWithNoMoney(bankAccounts)).toEqual(['Candy']);
  });

  it("Should return 'Candy' when the bankAccountsNoPositiveBalance array was passed", () => {
    expect(getClientWithNoMoney(bankAccountsNoPositiveBalance)).toEqual([
      'Candy',
    ]);
  });
});
