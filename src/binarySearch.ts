export const binarySearch = (array: number[], value: number) => {
    let lowestIndex = 0
    let highestIndex = array.length - 1
    let steps = 0
    console.time('binary search')
    while (lowestIndex <= highestIndex) {
        steps++
        // getting rounded down middle index of array
        let middleIndex = Math.floor((lowestIndex + highestIndex) / 2)
        // getting array element at middle index
        let middleValue = array[middleIndex]

        if (middleValue === value) {
            console.log({steps, elements: array.length, maxElementsForStep: Math.pow(2, steps)})
            console.timeEnd('binary search')
            return middleIndex
        }
        // if array value at the middle is more than searching item, continue looking at smallest half of array
        if (middleValue > value) highestIndex = middleIndex - 1
        // if array value at the middle is less than searching item, continue looking at biggest half of array
        else lowestIndex = middleIndex + 1
    }
    console.log({steps}) // check time commenting this line;)
    console.timeEnd('binary search')
    return null
}


export const binaryRecursion = (arr: number[], value: number): number=> {
    let mid = Math.floor(arr.length / 2);
    if (!arr.length) {
        return -1;
    }
    if (value === arr[mid]) {
        return mid;
    } else if (value < arr[mid]) {
        return binaryRecursion(arr.slice(0, mid), value);
    } else if (value > arr[mid]) {
        return mid + binaryRecursion(arr.slice(mid), value);
    } return -1
}