const STYLE = 1
const CLASS = 1<<1
const TEXT = 1<<2

// | 授权
let vnodeType = STYLE | CLASS

console.log("vnodeType:",vnodeType) // vnodeType: 3

// & 鉴权
console.log("vnodeType:",vnodeType & STYLE) // vnodeType: 1
console.log("vnodeType:",vnodeType & CLASS) // vnodeType: 2
console.log("vnodeType:",vnodeType & TEXT) // vnodeType: 0