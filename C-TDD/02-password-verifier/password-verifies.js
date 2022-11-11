function verifyPassword(password) {
    if (password === null) {
        return "Password rejected";
    } else if(password.length>8 && containsUppercaseLetter(password) &&
    containsNumber(password)) {
        return "Password accepted";
    } else {
        return "Password rejected";
    }
}

function containsUppercaseLetter(string) {
    return /[A-Z]/.test(string);
}

function containsNumber(string) {
    return /[0-9]/.test(string);
}

module.exports = verifyPassword;