import { isZero } from "./isZero";

test("value=0", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test("value=1", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
