function checkNumber(num) {
    // Even or Odd
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }

    // Positive, Negative, or Zero
    if (num > 0) {
        console.log(num + " is positive.");
    } else if (num < 0) {
        console.log(num + " is negative.");
    } else {
        console.log(num + " is zero.");
    }

    // Divisible by both 3 and 5
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " is divisible by both 3 and 5.");
    } else {
        console.log(num + " is not divisible by both 3 and 5.");
    }
}

// Example
checkNumber(15);


