/**
 * Linear - O(n)
 */

let n = [1, 2, 4];

function linear(arr) {
    let result = 0;
    arr.map(function (i) {
        result += i;
    });
    return result;
}

// example usage:
console.log(linear(n));