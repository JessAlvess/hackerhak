function processData(input) {
    let words = input.split('\r\n')
    for(let i = 0; i < words.length; i++){
        let split = words[i].substring(0,1) === 'S';
        let type = words[i].substring(2,3);
        let word = words[i].substring(4, words[i].length);
        if(split){
            if(type === 'M'){
                word = word.substring(0,word.length-2) //remove ()
            }
            word = word.split(/(?=[A-Z])/).join(' ').toLowerCase();
        }
        else{
            let arr = word.split(' ')
            word = concat(arr, type)
        }
        console.log(word)
    }
}

function concat(array, type){
    
       array.forEach( (e, j) => {
                array[j] = e.substring(0,1).toUpperCase() + e.substring(1, e.length)
                    if(j === 0 && type !== 'C'){
                        array[j] = e.substring(0,1).toLowerCase() + e.substring(1, e.length)
                    }
                } )
        return array.join('').concat( type === 'M'? '()': '')
}