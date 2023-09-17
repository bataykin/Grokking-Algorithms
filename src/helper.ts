export const getRandomArray = (len: number): number[] => {
    let arr = []
    for (let i = 0; i < len; i++) {
        let el = Math.floor(Math.random() * len * 10)
        arr.push(el)
    }
    return arr
}