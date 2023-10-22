import { isUserName } from "../../src";

test("test 1", () => {
  expect(isUserName("name", 3, 5)).toBe(true);
});

test("test 2", () => {
  expect(isUserName("name", 5, 8)).toBe(false);
});

test("test 3", () => {
  expect(isUserName("_name")).toBe(true);
});

test("test 4", () => {
  expect(isUserName("na")).toBe(false);
});
