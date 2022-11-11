let add = require("./calculator");

test("return 10 if argument passed is 2,8", function() {
    expect(add('"2", "8"')).toEqual('10')
});

test("return 8 if argument passed is 8", function () {
  expect(add('"8"')).toEqual("8");
});

test("return 15 if argument passed is 2, 10, 3 ", function () {
  expect(add('"2", "10", "3"')).toEqual("15");
});