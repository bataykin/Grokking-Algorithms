import {binarySearch} from "./binarySearch";
import {selectionSort} from "./selectionSort";

console.clear()
console.log("Lets grokkin\' the algorithms!")

const makeSortedArr = (amount: number) => {
    const result = []
    for (let i = 0; i < amount; i++) {
        result.push(i )
    }
    return result
}

const arrLength = 4294967295

const arr = makeSortedArr(112000000)
// console.log(arr)


let bs = binarySearch(arr, 66000000)

let ss = selectionSort(makeSortedArr(100000))
// console.log(ss)

