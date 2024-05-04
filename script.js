if ((Number.isNaN(value1) && !Number.isNaN(value2)) || (!Number.isNaN(value1) && Number.isNaN(value2))) {
    return false;
}
    // Otherwise, return true if they are of the same type
    return typeof value1 === typeof value2;
}

// Test cases
console.log(isSameType(1, 3));          // true
console.log(isSameType("hey", "hello"));// true
console.log(isSameType(NaN, NaN));      // true
console.log(isSameType("3", 3));        // false

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
