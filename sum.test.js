const sum = require("./sum");
const sumMultiply = require("./sumMultiply");

test("Addition", async () => {
  await expect(sum(1, 2)).toBe(3);
  await expect(sum(3, 4)).toBe(7);
  await expect(sum(1000, 10000)).toBe(11000);
});

test("Multiplication", async () => {
  await expect(sumMultiply(1, 2)).toBe(2);
  await expect(sumMultiply(3, 4)).toBe(12);
});
