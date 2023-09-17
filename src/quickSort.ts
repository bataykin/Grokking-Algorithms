// O(n^2)
export const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr
    // let baseEl = arr[0]
    let baseEl = arr[Math.floor(Math.random()*arr.length)]
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < baseEl) leftArr.push(arr[i])
        else if (arr[i] > baseEl) rightArr.push(arr[i])
    }
    return quickSort(leftArr).concat(baseEl, quickSort(rightArr))
}