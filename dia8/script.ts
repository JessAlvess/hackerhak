let input = 15


function fizzBuzz(n: number) {
    // Write your code here
for (let index = 0; index <= n; index++) {
    index % 3 === 0 && index % 5 === 0 ? console.log('FizzBuzz') : index % 3 === 0 ? console.log('Fizz') : index % 5 === 0 ? console.log('Buzz') : console.log(index);
}
}

fizzBuzz(input)