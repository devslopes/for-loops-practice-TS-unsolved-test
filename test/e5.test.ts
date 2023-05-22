import { describe, expect, it } from "vitest";
import { getAllClientNames } from "../exercises/e5";
import { bankAccounts } from "../data/data";

describe('getAllClientNames', () => {
  it('Should exist', () => {
    expect(getAllClientNames).toBeInstanceOf(Function);
  });
  it('Should return an array of 5 items', () => {
    expect(getAllClientNames(bankAccounts).length).toEqual(5);
  });
  it('Should return an exact array of string values', () => {
    expect(getAllClientNames(bankAccounts)).toEqual([ 'Susan', 'Morgan', 'Joshua', 'Candy', 'Phil' ]);
  });
});
