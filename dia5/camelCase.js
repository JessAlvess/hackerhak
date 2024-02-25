const test = 'S;M;plasticCup()C;V;mobile phoneC;C;coffee machineS;C;LargeSoftwareBookC;M;white sheet of paperS;V;pictureFrame'

const test1 = "S;V;iPadC;M;mouse padC;C;code swarmS;C;OrangeHighlighter";

const test2 = 'C;V;can of cokeS;M;sweatTea()S;V;epsonPrinterC;M;santa clausC;C;mirror'

function processData(input) {
  //Enter your code here
  let string = "";
  string += input;

    const splitVariable = (str, upperCaseArr) => {
    let position
    lastIndex = 0
    let wordsArr = []
    for (let index = 0 ; index < upperCaseArr.length + 1; index++) {
        if (index === upperCaseArr.length) {
            position = str.length
        } else {
            position = [upperCaseArr[index]]
        }
        wordsArr.push((str.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = [upperCaseArr[index]]
    }
    let finalText = ''.concat(...wordsArr).trim();
    return finalText
    }

    const splitClass = (str, upperCaseArr) => {
      const outputText= str
    let lastIndex = 0
    let position
    let wordsArr = []
    for (let index = 0 ; index < upperCaseArr.length; index++) {
        if (index === upperCaseArr.length) {
            position = outputText.length
        } else {
            position = upperCaseArr[index + 1]
        }
        wordsArr.push((outputText.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = upperCaseArr[index + 1]
    }
    let finalText
    for (let index = 0; index < wordsArr.length; index++) {
        finalText = (''.concat(...wordsArr)).trim();
    }
    return finalText;
    }

    const splitMethod = (str, upperCaseArr) => {
    let outputText = str
    let lastIndex = 0
    let position
    let wordsArr = []
    for (let index = 0 ; index < upperCaseArr.length + 1; index++) {
        if (index === upperCaseArr.length) {
            position = outputText.length
        } else {
            position = [upperCaseArr[index]]
        }
        wordsArr.push((outputText.slice(lastIndex, position)).toLowerCase())
        wordsArr.push(' ')
        lastIndex = [upperCaseArr[index]]
    }
    wordsArr = wordsArr.slice(0, -5)
    let finalText = ''.concat(...wordsArr).trim();
    return finalText;
    }

    const combineMethod = (str, upperCaseArr) => {
        lastIndex = 0
        let position
        let wordsArr = []
        let finalText
        for (let index = 0 ; index <= upperCaseArr.length; index++) {
            if (index === upperCaseArr.length) {
                position = str.length
            } else {
                position = upperCaseArr[index]
            }
            if (index === 0) {
                wordsArr.push(((str.slice(lastIndex, position)).toLowerCase()).trim())
                
            } else {
                let temporaryString = ((str.slice(lastIndex, position)).toLowerCase()).trim()
                let upperCaseFirstLetter = temporaryString.charAt(0).toUpperCase()
                let temporaryStringSlices = temporaryString.slice(1)
                let finalString = ''.concat(upperCaseFirstLetter, temporaryStringSlices)
                wordsArr.push(finalString)
            }
            lastIndex = upperCaseArr[index]
        }
        wordsArr.push('()')
        finalText = ''.concat(...wordsArr).trim();
        return finalText
    }

    const combineClass = (str, upperCaseArr) => {
      outputText = str
      lastIndex = 0
      let position
      let wordsArr = []
      let finalText
      for (let index = 0 ; index <= upperCaseArr.length; index++) {
          if (index === upperCaseArr.length) {
              position = str.length
          } else {
              position = upperCaseArr[index]
          }
          let temporaryString = ((outputText.slice(lastIndex, position)).toLowerCase()).trim()
          let upperCaseFirstLetter = temporaryString.charAt(0).toUpperCase()
          let temporaryStringSlices = temporaryString.slice(1)
          let finalString = ''.concat(upperCaseFirstLetter, temporaryStringSlices)
          wordsArr.push(finalString)
          lastIndex = upperCaseArr[index]
      }
      finalText = ''.concat(...wordsArr).trim();
      return finalText;
    }    
  
    const combineVariable = (str, upperCaseArr) => {
      outputText = str
    lastIndex = 0
    let position
    let wordsArr = []
    let finalText
    for (let index = 0 ; index <= upperCaseArr.length; index++) {
        if (index === upperCaseArr.length) {
            position = outputText.length
        } else {
            position = upperCaseArr[index]
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
        lastIndex = upperCaseArr[index]
    }

        finalText = ''.concat(...wordsArr);
      finalText = finalText.trim()
    return finalText;
    }

  const getUpperCaseIndex = (str) => {
    const upperCaseArr = [];
    const isUpperCase = (str) => str === str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      const testCharacter = isUpperCase(str[i]) ? upperCaseArr.push(i) : false;
    }
    return upperCaseArr;
  };

  const combine = (type, index) => {
    if (type === "V") {
      let str = takeTheStringToTransform(index);
      const upperCaseArr = getUpperCaseIndex(str)
      return console.log(combineVariable(str, upperCaseArr))
    } else if (type === "C") {
      let str = takeTheStringToTransform(index);
      const upperCaseArr = getUpperCaseIndex(str)
      return console.log(combineClass(str, upperCaseArr))
    } else {
        const str = takeTheStringToTransform(index);
        const upperCaseArr = getUpperCaseIndex(str)
        return console.log(combineMethod(str, upperCaseArr))
      }
  };

  const split = (type, index) => {
    if (type === "V") {
        const str = takeTheStringToTransform(index);
        const upperCaseArr = getUpperCaseIndex(str)
        return console.log(splitVariable(str, upperCaseArr))
    } else if (type === "C") {
      const str = takeTheStringToTransform(index);
      const upperCaseArr = getUpperCaseIndex(str)
      return console.log(splitClass(str, upperCaseArr))
    } else {
      const str = takeTheStringToTransform(index);
      const upperCaseArr = getUpperCaseIndex(str)
      return console.log(splitMethod(str, upperCaseArr))
    }
  };

  const testMethod = (index) => {
    testType(index, string[index - 1]);
  };

  const testType = (index, method) => {
    let type = string[index + 1];
    if (method === "C") {
      combine(type, index);
    } else {
      split(type, index);
    }
  };

  const takeTheStringToTransform = (index) => {
    const firstIndex = index + 3;
    let finalIndex;
    for (let i = firstIndex; i < string.length; i++) {
      if (string[i] === ";" && string[i + 2] === ";") {
        finalIndex = i - 1
        break
      }
    }
    return string.slice(firstIndex, finalIndex);
  };

  for (i = 0; i < string.length; i += 1) {
    const positionIsValid =
      string[i] === ";" && string[i + 2] === ";" ? testMethod(i) : false;
  }
}

// console.log(processData(test));
// console.log(processData(test1));
processData(test2);



