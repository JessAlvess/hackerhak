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

function splitMethod(inputText) {
    for (let index = 0; index < inputText.length - 2; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length - 2)
    lastIndex = 0
    let position
    let wordsArr = []
    for (let index = 0 ; index < upperCaseIndex.length + 1; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = [upperCaseIndex[index]]
        }
        wordsArr.push((outputText.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = [upperCaseIndex[index]]
    }
    let finalText = ''
    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return console.log(finalText);
}

function splitClass(inputText) {
    for (let index = 0; index < inputText.length; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length)
    lastIndex = 0
    let position
    let wordsArr = []
    for (let index = 0 ; index < upperCaseIndex.length; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = upperCaseIndex[index + 1]
        }
        wordsArr.push((outputText.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = upperCaseIndex[index + 1]
    }
    let finalText
    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return console.log(finalText);
}

if (method === 'S') {
    
    if (type === 'M') {
        splitMethod(inputText)
    } else if (type === 'C') {
        splitClass(inputText)
    }



} else {
    
}

} 

console.log(processData(input3));