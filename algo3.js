// ========================================== POWER RECURSION
// Write a function named power that accepts two arguments, a and b and calculates a raised to the power b.
// Example
// power(2, 3) => 8
// Note: Don't use
// 2 ** 3
// and don't use
// Math.pow(2, 3)
    // =============================================== ANSWERS
    let power = (a,b) => { 
        if (b <= 1) {
            return a;
        } else {
            return a * power(a, b-1); 
        }
    };
    console.log(power(3, 4));