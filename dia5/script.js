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
    let finalText = ''.concat(...wordsArr).trim();
    
    return finalText;
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
    return finalText;
    }

    function splitVariable(inputText) {
    for (let index = 0; index < inputText.length; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length)
    lastIndex = 0
    let position
    let wordsArr = []
    for (let index = 0 ; index <= upperCaseIndex.length; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = upperCaseIndex[index]
        }
        wordsArr.push((outputText.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = upperCaseIndex[index]
    }
    let finalText
    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return finalText;
    }

    function combineVariable(inputText) {
    for (let index = 0; index < inputText.length; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length)
    lastIndex = 0
    let position
    let wordsArr = []
    let finalText
    for (let index = 0 ; index <= upperCaseIndex.length; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = upperCaseIndex[index]
        }
        if (index === 0) {
            wordsArr.push(((outputText.slice(lastIndex, position)).toLowerCase()).trim())
            
        } else {
            let temporaryString = ((outputText.slice(lastIndex, position)).toLowerCase()).trim()
            let upperCaseFirstLetter = temporaryString.charAt(0).toUpperCase()
            let temporaryStringSlices = temporaryString.slice(1)
            let finalString = ''.concat(upperCaseFirstLetter, temporaryStringSlices)
            wordsArr.push(finalString)
        }
        lastIndex = upperCaseIndex[index]
    }

    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return finalText;
    }

    function combineMethod(inputText) {
    for (let index = 0; index < inputText.length; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length)
    lastIndex = 0
    let position
    let wordsArr = []
    let finalText
    for (let index = 0 ; index <= upperCaseIndex.length; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = upperCaseIndex[index]
        }
        if (index === 0) {
            wordsArr.push(((outputText.slice(lastIndex, position)).toLowerCase()).trim())
            
        } else {
            let temporaryString = ((outputText.slice(lastIndex, position)).toLowerCase()).trim()
            let upperCaseFirstLetter = temporaryString.charAt(0).toUpperCase()
            let temporaryStringSlices = temporaryString.slice(1)
            let finalString = ''.concat(upperCaseFirstLetter, temporaryStringSlices)
            wordsArr.push(finalString)
        }
        lastIndex = upperCaseIndex[index]
    }
    wordsArr.push('()')
    
    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return finalText;
    }

    function combineClass(inputText) {
    for (let index = 0; index < inputText.length; index++) {
        if (isUpperCase(inputText[index])) {
            upperCaseIndex.push(index)
        }        
    }
    outputText = inputText.slice(0, inputText.length)
    lastIndex = 0
    let position
    let wordsArr = []
    let finalText
    for (let index = 0 ; index <= upperCaseIndex.length; index++) {
        if (index === upperCaseIndex.length) {
            position = outputText.length
        } else {
            position = upperCaseIndex[index]
        }
        let temporaryString = ((outputText.slice(lastIndex, position)).toLowerCase()).trim()
        let upperCaseFirstLetter = temporaryString.charAt(0).toUpperCase()
        let temporaryStringSlices = temporaryString.slice(1)
        let finalString = ''.concat(upperCaseFirstLetter, temporaryStringSlices)
        wordsArr.push(finalString)
        
        lastIndex = upperCaseIndex[index]
    }

    for (let index = 0; index < wordsArr.length; index++) {
        finalText = ''.concat(...wordsArr);
    }
    return finalText;
    }

    if (method === 'S') {
    if (type === 'M') {
        return splitMethod(inputText)
    } else if (type === 'C') {
        return splitClass(inputText)
    } else {
        return splitVariable(inputText)
    }
    } else {
    if (type === 'V') {
        return combineVariable(inputText)
    } else if (type === 'M') {
        return combineMethod(inputText)
    } else {
        return combineClass(inputText)
    }
    }
} 

console.log(processData(input));
console.log(processData(input1));
console.log(processData(input2));
console.log(processData(input3));
console.log(processData(input4));
console.log(processData(input5));
console.log(processData(input6));


