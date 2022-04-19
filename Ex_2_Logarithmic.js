/**
 * Logarithmic - O(log n)
 */

let n = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

function logarithmic(n, x) {
    let start = 0;
    let end = n.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (n[middle] !== x && start <= end) {
        if (x < n[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (n[middle] === x) {
        return middle;
    } else {
        return -1;
    }
}

// example usage:
console.log(logarithmic(n, 4));