// const memoizeFn = (fn) => {
//     const cache = {};
//     return (...args) => {
//         if (cache[args]) {
//             return cache[args];
//         }
//         const result = fn.apply(this, args);
//         cache[args] = result;
//         return result;
//     };
// };
//
// const factorial = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// };
//
// const memoizedFactorial = memoizeFn(factorial);
