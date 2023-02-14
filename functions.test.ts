const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE

  test("shuffleArray should return an array", () => {
    const testArr = shuffleArray([22, 33, 55, 66, 77, 88, 99]);
    expect(testArr).toBeInstanceOf(Array);
  });

  test("length is the same as length of array fix commit", () => {
    const array = shuffleArray([22, 33, 55, 66, 77, 88, 99]);
    expect(array).toHaveLength(7);
  });
});