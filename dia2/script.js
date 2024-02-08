let arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    // Write your code here
    let maxSum = 0
    let minSum = +Infinity

    for (let index = 0; index < arr.length; index++) {
        let lastnumber = arr[index]
        arr[index] = 0
        let calc = arr.reduce((pv, cv) => pv + cv)
        maxSum = calc > maxSum ? calc : maxSum
        minSum = calc < minSum ? calc : minSum
        arr[index] = lastnumber
    }
    
    console.log(`${minSum} ${maxSum}`);
}

console.log(miniMaxSum(arr));