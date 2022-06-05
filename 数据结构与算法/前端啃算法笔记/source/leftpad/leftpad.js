function leftpad(str,length,ch){
  let len = length-str.length+1
  return Array(len).join(ch)+str
}

function leftpad2(str,length,ch){
  let len = length-str.length
  let total = ''
  while(true){
    if(len & 1){
      total += ch
    }

    if(len==1){
      return total+str
    }

    ch += ch
    len = len >> 1
  }
}

console.log(leftpad2('hello',10,'0'))
console.log(leftpad('hello',10,'0'))
