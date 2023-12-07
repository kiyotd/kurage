import { calculateRgbaForOpacity } from "../../../src";

test("test rgb", () => {
  // console.log(calculateRgbaForOpacity("80,209,173", 0.75));
  expect(calculateRgbaForOpacity("80,209,173", 0.75)).toBe("rgba(22,194,146,0.75)");
});

test("test hex", () => {
  // console.log(calculateRgbaForOpacity("#50d1ad", 0.75));
  expect(calculateRgbaForOpacity("#50d1ad", 0.75)).toBe("rgba(22,194,146,0.75)");
});
