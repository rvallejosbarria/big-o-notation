/**
 * Quadratic - O(n^2)
 */

let n = [1024, 256, 512, 128, 32, 64, 8, 16, 2, 4, 1];

let bubbleSort = (n) => {
    let l = n.length;
    for (let i = 0; i < l; i++) {
        for (let x = 0; x < l; x++) {
            if (n[x] > n[x + 1]) {
                let y = n[x];
                n[x] = n[x + 1];
                n[x + 1] = y;
            }
        }
    }
    return n;
};

// example usage:
console.log(bubbleSort(n));