import { describe, expect, it } from "vitest";
import { getAverage, getStringSum } from "../exercises/e3";

describe('getAverage', () => {
  it('Should exist', () => {
    expect(getAverage).toBeInstanceOf(Function);
  });
  it('Should return a number value of 23 for the [20, 22, 24, 26] array passed', () => {
    expect(getAverage([20, 22, 24, 26])).toEqual(23);
  });
});

describe('getStringSum', () => {
  it('Should exist', () => {
    expect(getAverage).toBeInstanceOf(Function);
  });
  it('Should return 17 for a string of GH2U87A', () => {
    const str = 'GH2U87A'
    expect(getStringSum(str)).toEqual(17);
  });
  it('Should return 0 for a string with no numbers GHIUJUHSG', () => {
    const str = 'GHIUJUHSG'
    expect(getStringSum(str)).toEqual(0);
  });
});
