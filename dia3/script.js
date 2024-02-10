let input = '07:05:45PM'

function timeConversion(s) {
    // Write your code here
let test = s[8] === 'A' ? 1 : 2
let hh = s.slice(0,2)
let mm = s.slice(3,5)
let ss = s.slice(6,8)

if (hh === '12' && test === 1) {
    hh = '00'
} else if (hh !== '12' && test === 2){
    hh = parseInt(hh) + 12
    hh = String(hh)
}

let convertedTime = `${hh}:${mm}:${ss}`
return convertedTime
}
console.log(typeof timeConversion(input));