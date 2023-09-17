export const EuclidsAlgorithm = (width: number, height: number): number | null => {
    if (width == height) return width
    let minSide = Math.min(width, height)
    let maxSide = Math.max(width, height)

    return EuclidsAlgorithm( minSide, maxSide - minSide)
}

export const arrSumRecursion = ( arr: number[]): number =>{
    if (arr.length == 0) return 0
    return arr[0] + arrSumRecursion(arr.slice(1))

}