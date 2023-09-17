import {binaryRecursion, binarySearch} from "./binarySearch";
import {selectionSort} from "./selectionSort";
import {arrSumRecursion, EuclidsAlgorithm} from "./recursion";
import {quickSort} from "./quickSort";
import {getRandomArray} from "./helper";

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
let bsr = binaryRecursion(arr, 66000000)
console.log({bs, bsr})

let ss = selectionSort(makeSortedArr(10000))
// console.log(ss)

// greatest common divisor
let rec = EuclidsAlgorithm(1680, 640)
console.log(rec)

let sum = arrSumRecursion([1,3,4,2,5, -16])
console.log(sum)

let qsort = quickSort(getRandomArray(9))
console.log({qsort})

