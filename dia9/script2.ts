var input = [1, 2, 3, 4, 3, 2, 1,4];

function lonelyinteger(a: number[]): number {
    // Write your code here
    const lonelyNumber: number[] = a.filter((element) => {
        let count: number = 0
        for (let elementInArray of a) {
            count += element === elementInArray ? 1 : 0
        }
        return count === 1 ? element : null
    })
    return lonelyNumber[0]
}

console.log(lonelyinteger(input))