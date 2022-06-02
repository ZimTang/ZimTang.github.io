const array = require('./arr')

function bubbleSort(arr){
  const len = arr.length - 1
  for(let j=0;j<len;j++){
    for(let i=0;i<len-j;i++){
      if(arr[i]>arr[i+1]){
        // 通过解构赋值交换
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
      }
    }
  }
  return arr
}

console.log('冒泡排序',bubbleSort(array))