import { describe, expect, it } from 'vitest';
import { getClientsWithBalanceOverOneHundred } from '../exercises/e9';
import { bankAccounts } from '../data/data';

describe('getClientsWithBalanceOverOneHundred', () => {
  it('Should exist', () => {
    expect(getClientsWithBalanceOverOneHundred).toBeInstanceOf(Function);
  });
  it('Should return an array of 3 items if bankAccounts was passed', () => {
    expect(getClientsWithBalanceOverOneHundred(bankAccounts).length).toEqual(3);
  });
  it('Should return an exact array of Susan, Morgan, and Joshua account objects if bankAccounts was passed', () => {
    expect(getClientsWithBalanceOverOneHundred(bankAccounts)).toEqual([
      {
        id: 1,
        name: 'Susan',
        balance: 100.32,
        deposits: [150, 30, 221],
        withdrawals: [110, 70.68, 120],
      },
      {
        id: 2,
        name: 'Morgan',
        balance: 1100,
        deposits: [1100],
      },
      {
        id: 3,
        name: 'Joshua',
        balance: 18456.57,
        deposits: [4000, 5000, 6000, 9200, 256.57],
        withdrawals: [1500, 1400, 1500, 1500],
      },
    ]);
  });
});
