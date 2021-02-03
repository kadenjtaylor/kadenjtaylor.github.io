function diff(expected, actual) {
    return "This should return the diff between a and b.";
}

function assert_or_else(message, expected, actual) {
    var pass = _.isEqual(expected, actual);
    console.log(expected);
    console.log(actual);
    console.log(pass);
    return {
        result: pass ? "PASS" : "FAIL",
        expected: expected,
        actual: actual,
        message: message,
        // diff: diff(expected, actual)
    };
}