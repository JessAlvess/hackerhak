const in1 = 6
const in2 = 3
const in3 = [1, 3, 2, 6, 1, 2]



function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let pairsArr = []
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if (i != j && i < j) {
                const test = (ar[i] + ar[j]) % k === 0 ? pairsArr.push(`${ar[i]}, ${ar[j]}`) : false;
            } 
        }
    }
    return console.log(pairsArr.length);
}

console.log(divisibleSumPairs(in1, in2, in3));