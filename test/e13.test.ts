import { describe, expect, it } from 'vitest';
import { getAllAccountsWithSumsOfDepositsLess2000 } from '../exercises/e13';
import { bankAccounts } from '../data/data';

describe('getAllAccountsWithSumsOfDepositsLess2000', () => {
  it('Should exist', () => {
    expect(getAllAccountsWithSumsOfDepositsLess2000).toBeInstanceOf(Function);
  });
  it('Should return an array of 4 items if bankAccounts array was passed', () => {
    expect(
      getAllAccountsWithSumsOfDepositsLess2000(bankAccounts).length
    ).toEqual(4);
  });
  it('Should return an exact array of 4 bank account objects (Susan, Morgan, Candy, and Phil) if bankAccounts array was passed', () => {
    expect(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts)).toEqual([
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
      { id: 4, name: 'Candy', balance: 0 },
      {
        id: 5,
        name: 'Phil',
        balance: 18,
        deposits: [100, 18],
        withdrawals: [100],
      },
    ]);
  });
});
