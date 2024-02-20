const string = `
aba
baba
aba
xzxb`;
const queries = `
aba
xzxb
ab`

function matchingStrings(strings, queries) {
    // Write your code here
let stringInput = strings.split('\n')
stringInput.shift()
let queriesInput = queries.split('\n')
queriesInput.shift() // remove first element '' 
let count = []
for (let i = 0; i < queriesInput.length; i++) {
    count[i] = 0
   for (let j = 0; j < stringInput.length; j++) {
    queriesInput[i] === stringInput[j] ? count[i] += 1 : false
   }; 
}
return count.join('\n')
}

console.log(matchingStrings(string, queries))