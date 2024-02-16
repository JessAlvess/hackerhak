const in1 = 'S;V;iPad   C;M;mouse pad   C;C;code swarm   S;C;OrangeHighlighter'

function processData(input) {
    //Enter your code here
  let string = ''
  string += input


  const combine = (type, index) => {

      if (type === 'V') {
        console.log(`combine the variable that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      } else if (type === 'C') {
        console.log(`combine the class that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      } else {
        console.log(`combine the method that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      }
  }
  
  const split = (type, index) => {    

      if (type === 'V') {
        console.log(`split the variable that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      } else if (type === 'C') {
        console.log(`split the class that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      } else {
        console.log(`split the method that have the first semi colon at index ${index}`)
        let str = takeTheStringToTransform(index)
        console.log(str);
        console.log();
      }
  }
  
  const testMethod = (index) => {
      testType(index, string[index - 1])
  }
  
  const testType = (index, method) => {
      let type = string[index + 1]
      if (method === 'C'){
          combine(type, index)
      } else {
          split(type, index)
      }
  }

  const takeTheStringToTransform = (index) => {
    const firstIndex = index + 3
    let finalIndex
        for (let i = index; i < string.length; i++) {
            if ((string[i] === ' ') && (string[i + 1] === ' ')) {
                finalIndex = i
                break
            }
        }
    return string.slice(firstIndex, finalIndex)
  }
  
  for (i = 0; i < string.length; i += 1){
      const positionIsValid = string[i] === ';' && string[i+2] === ';' ? testMethod(i) : false  
  }
  
}; 

console.log(processData(in1));