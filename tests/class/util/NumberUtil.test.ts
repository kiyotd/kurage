import { NumberUtil } from "../../../src";

test("NumberUtil.sortNumber 1", () => {
  expect(NumberUtil.map(50, 0, 100, 0, 1)).toEqual(0.5);
});

test("NumberUtil.sortNumber 2", () => {
  expect(NumberUtil.map(50, 0, 100, 0, 10)).toEqual(5);
});
