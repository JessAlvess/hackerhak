const input = 'S;M;plasticCup()'
const input1 = 'C;V;mobile phone'
const input2 = 'C;C;coffee machine'
const input3 = 'S;C;LargeSoftwareBook'
const input4 = 'C;M;white sheet of paper'
const input5 = 'S;M;industrialRubberTyredGantry()'
const input6 = 'S;V;pictureFrame'


function processData(input) {
    //Enter your code here
let method = input[0]
let type = input[2]
let inputText = input.slice(4)
let upperCaseIndex = []
const isUpperCase = str => str === str.toUpperCase()
let outputText = ''

if (method === 'S') {
    
    if (type === 'M') {
        for (let index = 0; index < inputText.length - 2; index++) {
            if (isUpperCase(inputText[index])) {
                upperCaseIndex.push(index)
            }        
        }

        console.log(upperCaseIndex);

        outputText = inputText.slice(0, inputText.length - 2)

        for (let index = 0; index < upperCaseIndex.length; index++) {
            outputText.replace(outputText[upperCaseIndex[index]], ` `)        
            
        }
        console.log(outputText);

    }



} else {
    
}

} 

console.log(processData(input5));