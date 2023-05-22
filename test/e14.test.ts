import { describe, expect, it } from 'vitest';
import { getClientsWithWrongBalance } from '../exercises/e14';
import { bankAccounts } from '../data/data';

describe('getClientWithWrongBalance', () => {
  it('Should exist', () => {
    expect(getClientsWithWrongBalance).toBeInstanceOf(Function);
  });
  it('Should return an array of 1 object if bankAccounts array was passed', () => {
    expect(getClientsWithWrongBalance(bankAccounts).length).toEqual(1);
  });
  it('Should return an array of 1 bank account of Joshua if bankAccounts array was passed', () => {
    expect(getClientsWithWrongBalance(bankAccounts)).toEqual([
      {
        id: 3,
        name: 'Joshua',
        balance: 18456.57,
        deposits: [4000, 5000, 6000, 9200, 256.57],
        withdrawals: [1500, 1400, 1500, 1500],
      },
    ]);
  });
  it('Should return an empty array for an empty initial array passed', () => {
    expect(getClientsWithWrongBalance([])).toEqual([]);
  });
});
