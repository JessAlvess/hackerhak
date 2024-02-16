const in1 = "S;V;iPad   C;M;mouse pad   C;C;code swarm   S;C;OrangeHighlighter";

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
    finalText = finalText.trim();
    return finalText
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
        
        for (let index = 0; index < wordsArr.length; index++) {
            finalText = ''.concat(...wordsArr);
        }
        finalText = finalText.trim();
        return finalText
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
      getUpperCaseIndex(str)

      console.log();
    } else if (type === "C") {
      console.log(
        `combine the class that have the first semi colon at index ${index}`
      );
      let str = takeTheStringToTransform(index);
      console.log(str);
      console.log(`Input string: ${str}`);

      console.log(getUpperCaseIndex(str));

      console.log();
    } else {
        let str = takeTheStringToTransform(index);
        const upperCaseArr = getUpperCaseIndex(str)
        return console.log(combineMethod(str, upperCaseArr)), console.log()
      }
  };

  const split = (type, index) => {
    if (type === "V") {
        let str = takeTheStringToTransform(index);
        const upperCaseArr = getUpperCaseIndex(str)
        return console.log(splitVariable(str, upperCaseArr)), console.log();
    } else if (type === "C") {
      console.log(
        `split the class that have the first semi colon at index ${index}`
      );
      let str = takeTheStringToTransform(index);
      console.log(str);
      console.log(`Input string: ${str}`);

      console.log(getUpperCaseIndex(str));

      console.log();
    } else {
      console.log(
        `split the method that have the first semi colon at index ${index}`
      );
      let str = takeTheStringToTransform(index);
      console.log(str);
      console.log(`Input string: ${str}`);

      console.log(getUpperCaseIndex(str));

      console.log();
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
    for (let i = index; i < string.length; i++) {
      if (string[i] === " " && string[i + 1] === " ") {
        finalIndex = i;
        break;
      }
    }
    return string.slice(firstIndex, finalIndex);
  };

  for (i = 0; i < string.length; i += 1) {
    const positionIsValid =
      string[i] === ";" && string[i + 2] === ";" ? testMethod(i) : false;
  }
}

console.log(processData(in1));
