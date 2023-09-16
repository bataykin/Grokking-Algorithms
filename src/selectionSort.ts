export const selectionSort = (array: number[]) => {
    const sortedArray = []
    console.time('selection sort')
    for (let i = 0; i < array.length; i++) {
        const smallestIndex = findSmallestIndex(array)
        sortedArray.push(array.splice(smallestIndex, 1))

    }
    console.timeEnd('selection sort')

    return sortedArray
}

const findSmallestIndex = (array: number[]) => {
    let smallestIndex = 0
    let smallest = array[smallestIndex]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}