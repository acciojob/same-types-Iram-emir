function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Check if the types of both values are the same
    return typeof value1 === typeof value2;
}

// Test cases
console.log(isSameType(1, 3));        // true
console.log(isSameType("hey", "hello"));   // true
console.log(isSameType(NaN, NaN));    // true
console.log(isSameType("3", 3));