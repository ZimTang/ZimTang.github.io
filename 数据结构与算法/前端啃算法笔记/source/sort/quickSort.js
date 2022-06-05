const array = require('./arr')

function quickSort(arr){
  let flag = arr[0]
  let left = []
  let right = []
  // 终止条件
  if(arr.length < 2){
    return arr
  }
  for(let i=1;i<arr.length;i++){
    if(arr[i]<flag){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(flag,quickSort(right))
}

console.log('快速排序:',quickSort(array))

function quick1(arr,start,end){
  // 双指针
  let init = start
  let flag = arr[init]
  start++ 
  // 没有相遇
  while(start<=end){
    while(arr[end]>flag){
      end--
    }

    while(arr[start]<flag){
      start++
    }

    if(start<end){
      // 交换位置
      [arr[start],arr[end]] = [arr[end],arr[start]]
      start++
      end--
    }
  }
  [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
  return start
}

function quickSort1(arr,start,end){
  if(start<end){
    // 获取标志位
    let index = quick1(arr,start,end)
    quickSort1(arr,start,index-1)
    quickSort1(arr,index,end)
  }
  return arr
}

console.log('原地快排:',quickSort1(array,0,array.length-1))