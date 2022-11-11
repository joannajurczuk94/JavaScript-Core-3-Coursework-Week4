let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert

  const n = 1;
  const result = "I";
  const output = convertToNewRoman(n);
  expect(result).toEqual(output);
});
