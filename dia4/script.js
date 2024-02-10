const input = [9,10, 5, 20, 20, 4, 5, 2, 25, 1]
const input1 = [10, 3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    // Write your code here
scores.shift()
let max = 0, min = 0
let countMax = 0, countMin = 0
let records = []
for (let index = 0; index < scores.length; index++) {
    if (index === 0) {
        max = scores[index]
        min = scores[index]
    } else {
        if (scores[index] > max) {
            countMax += 1
            max = scores[index]
        } else if (scores[index] < min ) {
            countMin += 1
            min = scores[index]
        }
    } 
}
records.push(countMax, countMin)
return records
}

console.log(breakingRecords(input));
console.log(breakingRecords(input1));
