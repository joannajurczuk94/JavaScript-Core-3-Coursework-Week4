let verifyPassword = require("./password-verifier");

test("check if password is valid", function() {
let password1="yyyy!4";
let expected ="Password rejected";

let password2 = "Joanna123";
let expected2 = "Password accepted";

let password3=null;
let expected3 = "Password rejected";

let password4= "Password!";
let expected4= "Password rejected";

let output1=verifyPassword(password1);
let output2 = verifyPassword(password2);
let output3 = verifyPassword(password3);
let output4 = verifyPassword(password4);

expected(output1).toEqual(expected1)
expected(output2).toEqual(expected2);
expected(output3).toEqual(expected3);
expected(output4).toEqual(expected4);

});