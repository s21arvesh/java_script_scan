// Test JavaScript file with multiple ESLint violations

// Violation 1: Using var instead of let/const
var old_variable = "This should use let or const";

// Violation 2: Missing semicolon
var missing_semicolon = "Missing semicolon here"

// Violation 3: Unused variable
const unused_variable = "This variable is never used";

// Violation 5: Console.log without semicolon
console.log("Missing semicolon")

// Violation 6: Alert function (not recommended)
function showAlert() {
    alert("This is not recommended in production");
}

// Violation 7: Multiple var declarations in one line
var x = 1, y = 2, z = 3;

// Violation 9: Single quotes instead of double quotes
const single_quotes = 'Should use double quotes';

// Violation 10: Function with parameters but no usage
function unusedParams(param1, param2) {
    const result = "Parameters not used";
    return result;
}

// Violation 11: Reassigning const (this will be caught as an error)
try {
    const constant_var = "Cannot reassign";
    constant_var = "This will cause an error";
} catch (e) {
    console.log("Error caught");
}

// Violation 12: Undefined variable access
function accessUndefined() {
    return some_undefined_variable + 1;
}

// Export
module.exports = {
    compareValues,
    showAlert,
    unusedParams,
    accessUndefined
};
