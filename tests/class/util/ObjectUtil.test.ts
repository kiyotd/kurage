import { ObjectUtil } from "../../../src";

test("ObjectUtil.objToJson 1", () => {
  expect(ObjectUtil.objToJson({ message: "hello" })).toEqual('{"message":"hello"}');
});

test("ObjectUtil.objToJson 2", () => {
  expect(ObjectUtil.objToJson({})).toEqual("{}");
});
