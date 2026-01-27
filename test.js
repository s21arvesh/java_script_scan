// Test JavaScript file with ESLint violations for scanning

// Violation 1: Using var instead of let/const
var old_variable = "This should use let or const";

// Violation 2: Missing semicolons
var missing_semicolon = "Missing semicolon here"

// Violation 3: Unused variables
const unused_variable = "This variable is never used";

// Violation 4: Using == instead of ===
function compareValues(a, b) {
    if (a == b) {  // Should use ===
        return true;
    }
    return false;
}

// Violation 5: Undefined variables
function testUndefined() {
    console.log(undefined_variable); // undefined_variable is not defined
}

// Violation 6: Console.log without semicolon
console.log("Missing semicolon")  // Missing semicolon

// Violation 7: Function not used
function unusedFunction() {
    alert("This function is never called"); // alert is not recommended
}

// Violation 8: Multiple var declarations
var x = 1, y = 2, z = 3; // Should use separate declarations

// Violation 9: Extra parentheses
if ((x === 1)) {  // Unnecessary parentheses
    return true;
}

// Violation 10: Mixed quotes
const mixed_quotes = 'Single quotes here'; // Should be consistent

// Export with issues
module.exports = {
    compareValues,
    testUndefined
};
