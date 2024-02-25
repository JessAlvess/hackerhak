let input = [7,6,5,4,1,2,3,8,9]

function findMedian(arr) {
    // Write your code here
    let temp = 0
    for (let j = 0; j < arr.length; j++) {
        for (let i=0; i < arr.length; i++) {
            if (arr[i] >  arr[i+1]) {
                temp = arr[i+1]
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
    }
    let median = Math.floor(arr.length/2)
    console.log(arr[median])
    
}

findMedian(input)