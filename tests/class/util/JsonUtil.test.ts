import { JsonUtil } from "../../../src";

test("JsonUtil.jsonToObj 1", () => {
  expect(JsonUtil.jsonToObj('{"message":"hello"}')).toEqual({ message: "hello" });
});

test("JsonUtil.jsonToObj 2", () => {
  expect(JsonUtil.jsonToObj("{}")).toEqual({});
});
