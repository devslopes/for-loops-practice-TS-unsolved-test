import { describe, expect, it } from 'vitest';
import { getClientWithLeastPositiveBalance } from '../exercises/e7';
import { bankAccounts, bankAccountsNoPositiveBalance } from '../data/data';

describe('getClientWithLeastBalance', () => {
  it('Should exist', () => {
    expect(getClientWithLeastPositiveBalance).toBeInstanceOf(Function);
  });
  it('Should return an array of 1 item (object)', () => {
    expect(getClientWithLeastPositiveBalance(bankAccounts).length).toEqual(1);
  });
  it('Should return an array with an object if there is an account with least balance, but greater than > 0', () => {
    expect(getClientWithLeastPositiveBalance(bankAccounts)).toEqual([
      {
        id: 5,
        name: 'Phil',
        balance: 18,
        deposits: [100, 18],
        withdrawals: [100],
      },
    ]);
  });
  it('Should return an empty array if there is no account with balance greater than > 0', () => {
    expect(
      getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance)
    ).toEqual([]);
  });
});
