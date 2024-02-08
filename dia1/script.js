const input = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let denominator = arr.length;
    let neg = null;
    let pos = null;
    let zero = null;

    for (const number of arr) {
        if (number < 0 ) {
           neg += 1;   
        } else if (number > 0){
            pos += 1;
        } else {
            zero += 1;
        }
    }
    console.log(`${(pos / denominator).toFixed(6)}`);
    console.log(`${(neg / denominator).toFixed(6)}`);
    console.log(`${(zero / denominator).toFixed(6)}`);

}


console.log(plusMinus(input));